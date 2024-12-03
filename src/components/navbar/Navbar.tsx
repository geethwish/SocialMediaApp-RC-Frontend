import { Avatar, Image, Input } from 'antd';
import styles from './Navbar.module.scss'
import facebookIcon from '../../assets/svg/facebook.svg';
import { FaBell, FaFacebookMessenger, FaHome, FaSearch } from 'react-icons/fa';
import { AiFillAppstore } from 'react-icons/ai';
import IconButton from '../IconButton/IconButton';




const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.leftSection}>
        <Image
          width={40}
          src={facebookIcon}
          preview={false}
        />
        <Input size="large" placeholder="Search Facebook" prefix={<FaSearch />} className={styles.searchField} />
      </div>

      <div style={{ display: "flex" }} className={styles.menuItem}>
        <FaHome size={40} />
      </div>
      <div className={styles.actionRightSection}>
        <IconButton icon={<AiFillAppstore />} />
        <IconButton icon={<FaFacebookMessenger />} />
        <IconButton icon={<FaBell />} />
        <Avatar size={40} src="https://randomuser.me/api/portraits/thumb/men/75.jpg"></Avatar>
      </div>
    </div>
  )
}

export default Navbar