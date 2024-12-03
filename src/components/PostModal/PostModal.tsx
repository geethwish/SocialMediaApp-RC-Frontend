import { FC } from 'react'
import AddPostModalHeader from '../AddPostModal/AddPostModalHeader';
import { Post } from '../../types';
import PostCard from '../PostCard/PostCard';
import CommentCard from '../CommentCard/CommentCard';
import { useFetchComments } from '../../hooks/useFetchComments';
import PostModalFooter from './PostModalFooter';
import { createComment } from '../../services/api';

import styles from './PostModal.module.scss'
import { Modal } from 'antd';

interface PostModalPros {
    isModalOpen: boolean;
    handleCancel: () => void;
    post: Post
}

const PostModal: FC<PostModalPros> = ({ isModalOpen, handleCancel, post }) => {
    // Use a custom hook for fetching comments
    const { isLoading, comments, errorF, refresh } = useFetchComments(post.id)

    const handleSendComment = async (comment: string) => {

        const params = {
            postId: post.id as string,
            content: comment
        }
        try {
            const response = await createComment(params)
            if (response !== undefined) {
                refresh()
            }

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <Modal
            title={<AddPostModalHeader />}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={<PostModalFooter handleSendComment={handleSendComment} />}
        >
            <div className={styles.ScrollableContainer}>
                <PostCard post={post} showComments={handleCancel} mode={"comment"} />
                {
                    isLoading && <p>Loading...</p>
                }
                {
                    !isLoading && comments.length > 0 && comments.map((comment) => <CommentCard comment={comment} key={comment.id} />)
                }
            </div>


        </Modal>
    )
}

export default PostModal