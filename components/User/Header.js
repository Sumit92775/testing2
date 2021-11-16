import { Badge, Input,Layout, message } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { Avatar, Switch, Dropdown, Menu } from 'antd';
import { UserOutlined, CheckOutlined, CloseOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { ShoppingCart, AccountBalanceWallet } from "@material-ui/icons"
import SettingsIcon from '@material-ui/icons/Settings';
import Link from "next/link";
const { SubMenu } = Menu;
import styles from '../Public/Header.module.scss';
import Image from 'next/image';

import { getNotifications } from '../../services/notification';
// import { getStoreByLocation } from '../../services/home';
import { getCartStatus } from '../../services/header';
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { getMyDetails } from "../../services/addresses";
import { useDispatch } from 'react-redux';

import details from '../../reducers/details'
// import {userDetails} from '../../reducers/userDetails'

const cookies = new Cookies();

const Header = (props) => {

    console.log("Props: ",props);
    
    const dispatch = useDispatch();
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


    
//     useEffect(() =>{

//         if(cookies.get('accessToken')){
//             try{

//                 getMyDetails().then(res =>{
//                     console.log("MyDetails Response1: ",res);
//                     // let userName = res.UserData.userName;
//                     // dispatch(userDetails());
//                     // console.log("Data: ",data);
//                     // console.log("Dispatch: ",dispatch);
//                     // setUserName(userName);
//                 })

//                 // setUserName(props?.userDetails?.UserData?.username)

//                 getNotifications(1).then(res =>{
//                     if(res.status === 404 || res.status === 403){
//                       setNotificationCount(0);
//                     }else{
//                       setNotificationCount(res?.newNotifications);
//                     }
//                 }).catch(error =>{
//                     console.log(error);
//                 })

//                 getCartStatus().then(res =>{
//                     if(res.status == false || res.status == 404 || res.status == 403){
//                         setCartItemCount(0);
//                         console.log("ResponseCart: ",res);
//                     }else{
//                         if(res.data){
//                             console.log("Cart Count: ",res.data[0]);
//                             setCartItemCount(res.data[0].cartCount);
//                         }else{

//                         }
//                     }
//                 })
        
//             }catch(error){
//               console.log(error);
//               message.error(error);
//             }
//         }else{
    
//         }
  
//    },[])


    return (
        <header className="user-header">
           
           {/* <div className="grid-view grid-4" style={{gridTemplateColumns: "250px 1200px auto auto"}}> */}
                {/* <div className="relative" style={{width :"250px"}}>
                    <Link className={styles.logo} href={ process.env.base_url } passHref={true}>
                        <Image layout="fill" src="/full-logo.svg" alt="logo" />
                    </Link>
                </div> */}
                <Input className="header-search ml-50" size="small" placeholder="Search" prefix={<SearchOutlined />} />
            
                <div className="heder-actions pull right">
                    <div></div>
                    <div>
                        <Avatar className="mr-8" size={22} icon={<UserOutlined />} />
                        <span>Arabic</span>
                        </div>
                    <Badge className="mt-5" count={props?.data?.notificationCount}>
                        <Link href="/notifications" passHref={true}>
                            <span className="cursor"><NotificationsIcon /></span>
                        </Link>
                    </Badge>
                    <Badge className="mt-5" count={props?.data?.cartCount}>
                        <Link href="/product-details" passHref={true}>
                            <span className="cursor"><ShoppingCart/></span>
                        </Link>
                    </Badge>
                    {/* <Badge className="mt-5" count={props?.data?.myBalance} overflowCount={1000} size={'small'}> */}
                        <Link href="/payments/wallet" passHref={true}>
                            <span className="cursor"><AccountBalanceWallet/><span className="ml-5 cursor">SAR {props?.data?.myBalance}</span></span>
                        </Link>
                    {/* </Badge> */}
                    <Link href="/profile" passHref={true}>
                        <span className="cursor"><SettingsIcon /></span>   
                    </Link>
                        <Menu mode="horizontal" className="user-actions transparent-bg">
                            <SubMenu key="SubMenu" icon={<Avatar className="mr-5" size={22} icon={<UserOutlined />} />} title={username}>
                                <Menu.Item key="booking">
                                    <Link href={ process.env.base_url + "bookings" } passHref={true}>
                                        My Bookings
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="reviews">
                                    <Link href={ process.env.base_url + "reviews" } passHref={true}>
                                        My Reviews
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="wallet">
                                    <Link href={ process.env.base_url + "payments/wallet" } passHref={true}>
                                        My Wallets
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="giftcards">
                                    <Link href={ process.env.base_url + "giftcards/1" } passHref={true}>
                                        Gift Cards
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="login" onClick={() => {
                                    console.log("Logout Call!!");
                                    cookies.remove('accessToken');
                                    }}>
                                    <Link href={ process.env.base_url + "login" } passHref={true}>
                                        Logout
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                </div>
        </header>
    )
}

export default Header;

