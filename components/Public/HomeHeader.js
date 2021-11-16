// import useTranslation from 'next-translate/useTranslation';
// import { UserOutlined } from '@ant-design/icons';
// import { Avatar, Button, Input, Menu } from 'antd';
// import styles from './HomeHeader.module.scss';
// import Image from 'next/image';
// import Link from 'next/link'
// import { SearchOutlined } from '@ant-design/icons';
import useTranslation from 'next-translate/useTranslation';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Input, Menu } from 'antd';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link'
import { SearchOutlined } from '@ant-design/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { ShoppingCart } from "@material-ui/icons"
import SettingsIcon from '@material-ui/icons/Settings';
import { getNotifications } from '../../services/notification';
import { getStoreByLocation } from '../../services/home';
import { getCartStatus } from '../../services/header';

const { SubMenu } = Menu;


const HomeHeader = (props) => {
    const { t } = useTranslation('common');

    console.log(props);

    const [notificationCount, setNotificationCount] = useState(0);
    const [cartItemCount, setCartItemCount] = useState(0);
  
  
    useEffect( () =>{
  
      try{
  
          getNotifications(1).then(res =>{
              if(res.status === 404){
                setNotificationCount(0);
              }else{
                setNotificationCount(res?.newNotifications);
                
              }
          }).catch(error =>{
              console.log(error);
          })
  
        getCartStatus().then(res =>{
            if(res.status == false || res.status == 403 || res.status == 404){
                setCartItemCount(0);
            }else{
                if(res.data){
                    setCartItemCount(res.data[0].cartCount)
                }
            }
        })
  
      }catch(error){
        console.log(error);
        message.error(error);
      }
  
   },[])

    return (
        <div className={styles.head}>
            <div className="relative">
                <Link className={styles.logo} href={ process.env.base_url } passHref={true}>
                    <Image layout="fill" hidden={props?.type === "home" ? false : true} src="/full-logo.svg" alt="logo" />
                </Link>
            </div>
            {
                props?.type === "home" ? 
                
            <Input className="header-search ml-50" size="small" placeholder="Search" prefix={<SearchOutlined />} />
                
                : 
                <div>
                </div>
            }
            <div className="header-actions">
            <Badge className="mt-5 mr-20" count={notificationCount}>
                        <Link href="/notifications" passHref={true}>
                            <span className="cursor txt light1"><NotificationsIcon /></span>
                        </Link>
                    </Badge>
                    <Badge className="mt-5 mr-20" count={cartItemCount}>
                        <Link href="/product-details" passHref={true}>
                            <span className="cursor txt light1"><ShoppingCart/></span>
                        </Link>
                    </Badge>

                    <Link href="/profile" passHref={true}>
                        <span className="cursor mt-5 txt light1"><SettingsIcon /></span>   
                    </Link>
                        <Menu mode="horizontal" className="user-actions transparent-bg">
                            <SubMenu key="SubMenu" icon={<Avatar className="mr-5" size={22} icon={<UserOutlined />} />} title="Halais">
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
                                    <Link href={ process.env.base_url + "/payments/wallet" } passHref={true}>
                                        My Wallets
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="setting-1">
                                    <Link href={ process.env.base_url + "/giftcards/1" } passHref={true}>
                                        Gift Cards
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="giftcard-1" onClick={() => {
                                    console.log("Logout Call!!");
                                    cookies.remove('accessToken');
                                    }}>
                                    <Link href={ process.env.base_url + "login" } passHref={true}>
                                        Logout
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>

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
    )
}

export default HomeHeader
