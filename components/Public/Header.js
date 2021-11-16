import useTranslation from 'next-translate/useTranslation';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Menu, message } from 'antd';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link'
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
const { SubMenu } = Menu;
import NotificationsIcon from '@material-ui/icons/Notifications';
import { ShoppingCart } from "@material-ui/icons"
// import SettingsIcon from '@material-ui/icons/Settings';
import { getNotifications } from '../../services/notification';
import cx from 'classnames';
import {SettingFilled} from '@ant-design/icons'
import { getCartStatus } from '../../services/header';
import { getMyDetails } from '../../services/addresses';

const cookies = new Cookies();

const Header = (props) => {
    const { t } = useTranslation('common');
    console.log("Public Layout Header Props: ", props);

    // const [notificationCount, setNotificationCount] = useState(0);
    // const [cartItemCount, setCartItemCount] = useState(0);
    const [username, setUsername] = useState('')
    
    useEffect( () =>{
        if(cookies.get('accessToken')){
            try{
                getMyDetails().then(res =>{
                    if(res.status){
                        if(res.UserData){
                            setUsername(res.UserData.userName)
                        }
                    }else{

                    }
                })
            }catch(error){
              console.log(error);
              message.error(error);
            }
        }else{
    
        }
  
    },[])




    return (
        <div className={styles.head}>
            <div className="relative ml-10 mt-10 mb-10 mr-10">
                <Link className={cx('ml-10 mr-10 mt-10 ml-10', styles.logo)} href={ process.env.base_url } passHref={true}>
                    <Image layout="fill" src="/full-logo.svg" alt="logo" />
                </Link>
            </div>
            <div></div>

            {cookies.get('accessToken') ? 
            

            <div className="heder-actions pull right">
                    <div></div>
                    <div>
                        {/* <Avatar className="mr-8" size={22} icon={<UserOutlined />} /> */}
                        {/* <span>Arabic</span> */}
                        </div>
                    <Badge className="mt-5 mr-20" count={props?.data?.notificationCount ? props?.data?.notificationCount : 0 }>
                        <Link href="/notifications" passHref={true}>
                            <span className="cursor txt light1"><NotificationsIcon /></span>
                        </Link>
                    </Badge>
                    <Badge className="mt-5 mr-20" count={props?.data?.cartCount ? props?.data?.cartCount : 0}>
                        <Link href="/product-details" passHref={true}>
                            <span className="cursor txt light1"><ShoppingCart/></span>
                        </Link>
                    </Badge>
                    <Link href="/profile" passHref={true}>
                        <span className="cursor txt light1 mr-20"><SettingFilled /></span>   
                    </Link>
                        <Menu mode="horizontal" className="user-actions transparent-bg">
                            <SubMenu key="SubMenu" icon={<Avatar className="mr-5" size={22} icon={<UserOutlined />} />} title={username}>
                                <Menu.Item key="setting-1">
                                    <Link href={ process.env.base_url + "bookings" } passHref={true}>
                                        My Bookings
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="giftcard-1">
                                    <Link href={ process.env.base_url + "reviews" } passHref={true}>
                                        My Reviews
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="setting-1">
                                    <Link href={ process.env.base_url + "payments/wallet" } passHref={true}>
                                        My Wallets
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="setting-1">
                                    <Link href={ process.env.base_url + "giftcards/1" } passHref={true}>
                                        Gift Cards
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="giftcard-1"  onClick={() => {
                                    console.log("Logout Call!! 2");
                                    cookies.remove('accessToken');
                                    }}>
                                    <Link href={ process.env.base_url + "login" } passHref={true}>
                                        Logout
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>

                </div>

            : 
            <div>
                <div>
                    <Link href="/sponsoredpromotions" passHref={true}>
                        <span style={{visibility: "hidden"}} className="primary-txt mr-22">{ t('Provider Subscription Tiers') }</span>
                    </Link>
                    {/* <Avatar className="mr-8" size={22} icon={<UserOutlined />} /> */}
                    {/* <span>Arabic</span> */}
                </div>
                <div className="header-actions">
                    <Link href="/login" passHref={true}>
                        <Button className="ant-btn default medium mr-14">{ t('Sign In') }</Button>
                    </Link>
                    <Link href="/signup" passHref={true}>
                        <Button className="ant-btn primary medium">{ t('Sign Up') }</Button>
                    </Link>
                    {/* <div>
                        <Menu mode="horizontal" className="user-actions transparent-bg">
                            <SubMenu key="SubMenu" icon={<Avatar className="mr-5" size={22} icon={<UserOutlined />} />} title="Halais">
                                <Menu.Item key="setting-1">
                                    <Link href={ process.env.base_url + "login" } passHref={true}>
                                        My Bookings
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="giftcard-1">
                                    <Link href={ process.env.base_url + "reviews" } passHref={true}>
                                        My Reviews
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="setting-1">
                                    <Link href={"payments/wallet" } passHref={true}>
                                        My Wallets
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="setting-1">
                                    <Link href={ process.env.base_url + "gift-cards" } passHref={true}>
                                        Gift Cards
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="giftcard-1">
                                    <Link href={ process.env.base_url + "" } passHref={true}>
                                        Logout
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div> */}

                </div>

            </div>
            }
        </div>
    )
}

export default Header
