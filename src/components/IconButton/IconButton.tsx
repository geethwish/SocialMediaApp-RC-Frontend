import { Button } from 'antd'
import React, { FC } from 'react'
import styles from './IconButton.module.scss'

interface IconButtonProps {
    icon?: React.ReactNode
}
const IconButton: FC<IconButtonProps> = ({ icon = <></> }) => {
    return (
        <Button type="primary" shape="circle" icon={icon} className={styles.button} />
    )
}

export default IconButton