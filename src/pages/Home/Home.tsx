import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import { fetchPosts } from "../../store/slices/posts/getPost.slice";
import PostCard from "../../components/PostCard/PostCard";

import styles from "./Home.module.scss";
import { Button } from "antd";
import AddPostModal from "../../components/AddPostModal/AddPostModal";

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const posts = useSelector((state: RootState) => state.posts.posts);
    const PostCardStatus = useSelector((state: RootState) => state.cratePost.status);
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleHideModal = () => {
        setShowModal(false)
    }

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);


    useEffect(() => {
        if (PostCardStatus === 'success') {
            dispatch(fetchPosts());
        }
    }, [PostCardStatus])

    console.log(posts);

    return (
        <div className={styles.pageWrapper}>
            <Button type="primary" style={{ width: '100%' }} onClick={handleShowModal}>Create a Post</Button>
            {
                posts.length > 0 && posts.map((post) => <PostCard post={post} key={post.id} />)

            }

            <AddPostModal isModalOpen={showModal} handleCancel={handleHideModal} handleOk={handleShowModal} />
        </div>
    )
}

export default Home