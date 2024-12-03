import { Button } from 'antd'
import React, { FC } from 'react'
import styles from './IconButton.module.scss'

interface IconButtonProps {
    icon?: React.ReactNode
    onClick?: () => void
}
const IconButton: FC<IconButtonProps> = ({ icon = <></>, ...rest }) => {
    return (
        <Button type="primary" shape="circle" icon={icon} className={styles.button} {...rest} />
    )
}

export default IconButton