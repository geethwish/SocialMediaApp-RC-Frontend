import { Card } from "antd"
import styles from './PostCard.module.scss'
import PostCardHeader from "./PostCardHeader"
import { PostCardHeaderProps } from "../../types"
import { FC } from "react"

const PostCard: FC<PostCardHeaderProps> = ({ post }) => {
    return (
        <Card
            className={styles.card}
            title={<PostCardHeader />}
            bordered={false}

        >
            <h1 style={{ color: post.titleColor ?? '#0000' }}>
                {post.title ?? ''}
            </h1>
            <p>{post.description ?? ''}</p>

            <hr />
        </Card>
    )
}

export default PostCard