import { Avatar, Button } from 'antd'
import { FaGlobe } from 'react-icons/fa'

import styles from './PostCard.module.scss'
import { IoClose } from 'react-icons/io5'
import { HiDotsHorizontal } from 'react-icons/hi'

const PostCardHeader = () => {
    return (
        <div className={styles.postCardWrapper}>
            <div className={styles.postCardHeader}>
                <Avatar size={40} src="https://randomuser.me/api/portraits/thumb/men/75.jpg"></Avatar>
                <h4>
                    John Smith
                    <div className={styles.lastOnline}>
                        <span>
                            40m <FaGlobe size={10} />
                        </span>
                    </div>

                </h4>
            </div>

            <div className={styles.action}>
                <Button type="link" size={"large"}>
                    <HiDotsHorizontal />
                </Button>
                <Button type="link" size={"large"}>
                    <IoClose />
                </Button>
            </div>
        </div>

    )
}

export default PostCardHeader