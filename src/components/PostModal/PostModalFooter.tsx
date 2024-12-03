import { Avatar, Button } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { FC, useState } from 'react'

import styles from './PostModal.module.scss'
import { IoSend } from 'react-icons/io5'

interface PostModalFooterProps {
    handleSendComment: (comment: string) => void
}
const PostModalFooter: FC<PostModalFooterProps> = ({ handleSendComment }) => {

    const [comment, setComment] = useState('')

    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setComment(e.target.value)
    }

    const handleSend = () => {
        handleSendComment(comment)
        setComment('')
    }


    return (
        <div className={styles.commentInputSection}>
            <Avatar size={40} src="https://randomuser.me/api/portraits/thumb/men/75.jpg"></Avatar>
            <TextArea placeholder="Write a comment" onChange={handleTextInput} value={comment} />
            <Button type='text' onClick={() => handleSend()} disabled={comment.length < 3} ><IoSend size={24} /></Button>
        </div>
    )
}

export default PostModalFooter