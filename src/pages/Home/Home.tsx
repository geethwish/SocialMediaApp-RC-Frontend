import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import { fetchPosts } from "../../store/slices/posts/getPost.slice";
import PostCard from "../../components/PostCard/PostCard";

import styles from "./Home.module.scss";
import { Button } from "antd";
import AddPostModal from "../../components/AddPostModal/AddPostModal";
import PostModal from "../../components/PostModal/PostModal";
import { Post } from "../../types";
import { resetCreatePostState } from "../../store/slices/posts/createPost.slice";
import { CustomAlert } from "../../util/alertHandler";

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const posts = useSelector((state: RootState) => state.posts.posts);
    const PostCardStatus = useSelector((state: RootState) => state.cratePost.status);
    const [showModal, setShowModal] = useState(false);
    const [showPostModal, setShowPostModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleHideModal = () => {
        setShowModal(false)
    }

    // Show post Comments Modal
    const handleShowComments = (post: Post) => {
        setSelectedPost(post)
        setShowPostModal(true)
    }

    // Close post modal
    const handleHidePostModal = () => {
        setSelectedPost(null)
        setShowPostModal(false)
    }

    // Fetch posts on page load
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);


    // Fetch posts after creating a post
    useEffect(() => {
        if (PostCardStatus === 'succeeded') {
            CustomAlert('Post added successfully', 'success')
            dispatch(fetchPosts());
            dispatch(resetCreatePostState());
        }
    }, [PostCardStatus])

    return (
        <div className={styles.pageWrapper}>
            <Button type="primary" style={{ width: '100%' }} onClick={handleShowModal}>Create a Post</Button>
            {
                posts.length > 0 && posts.map((post) => <PostCard post={post} key={post.id} showComments={handleShowComments} />)

            }

            {
                showModal && <AddPostModal isModalOpen={showModal} handleCancel={handleHideModal} handleOk={handleShowModal} />
            }

            {
                showPostModal && <PostModal isModalOpen={showPostModal} handleCancel={handleHidePostModal} post={selectedPost as Post} />
            }

        </div>
    )
}

export default Home