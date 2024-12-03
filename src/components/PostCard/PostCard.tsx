import { Button, Card } from "antd"
import styles from './PostCard.module.scss'
import PostCardHeader from "./PostCardHeader"
import { PostCardHeaderProps } from "../../types"
import { FC } from "react"
import { AiFillLike } from "react-icons/ai"
import { FaComment } from "react-icons/fa"

const PostCard: FC<PostCardHeaderProps> = ({ post, showComments, mode = "post" }) => {
    return (
        <Card
            className={styles.card}
            title={<PostCardHeader mode={mode} />}
            bordered={false}

        >
            <h1 style={{ color: post.titleColor ?? '#0000' }}>
                {post.title ?? ''}
            </h1>
            <p>{post.description ?? ''}</p>

            <div className={styles.separator} />


            <div className={styles.action}>
                <Button type="text"><AiFillLike size={24} /></Button>
                <Button type="text" onClick={() => showComments(post)}><FaComment size={24} /></Button>
            </div>
        </Card>
    )
}

export default PostCard