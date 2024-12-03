import { FC } from "react"

import styles from './AddPostModal.module.scss'

const AddPostModalHeader: FC = () => {
    return (
        <h4 className={styles.modalHeader}>John Smith's Post</h4>
    )
}

export default AddPostModalHeader