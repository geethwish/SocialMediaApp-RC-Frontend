import { FC } from "react"
import { CommentCardProps } from "../../types"
import { Avatar } from "antd"

import styles from './CommentCard.module.scss'

const CommentCard: FC<CommentCardProps> = ({ comment }) => {
    return (
        <div>
            <div className={styles.cardWrapper}>
                <Avatar size={40} src="https://randomuser.me/api/portraits/thumb/men/75.jpg"></Avatar>
                <div className={styles.commentContentWrapper}>
                    <h6>
                        {comment.user?.name ?? ""}
                    </h6>
                    <p>
                        {comment.content ?? ""}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default CommentCard