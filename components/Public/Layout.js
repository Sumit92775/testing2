import Header from './Header';
import FooterMenus from '../FooterMenus';
import Footer from '../Footer';
import styles from './Layout.module.scss';
import TopMenubar from './TopMenubar';
import cx from 'classnames';
import Cookies from 'universal-cookie';
import Headeruser from '../User/Header';
import HomeHeader from './HomeHeader'
import { useEffect, useState } from 'react';
import { getNotifications } from '../../services/notification';
import { getCartStatus } from '../../services/header';
const cookies = new Cookies();

const Layout = ({children, data}) => {

    // const [notificationCount, setNotificationCount] = useState(0);
    // const [cartItemCount, setCartItemCount] = useState(0);

    {/* <Headeruser notificationCount={notificationCount} setNotificationCountFunction={setNotificationCountFunction}></Headeruser> */}

    // const setNotificationCountFunction = () =>{
    //     setNotificationCount(data.notificationCount)
    // }

    // useEffect(() =>{
    //     try{
    //         getNotifications(1).then(res =>{
    //             if(res.status === 404 || res.status === 403 || res.status == false){
    //                 setNotificationCount(0);
    //             }else{
    //                 setNotificationCount(res?.newNotifications);
    //             }
    //         }).catch(error =>{
    //             console.log(error);
    //         })
    
    //         getCartStatus().then(res =>{
    //             if(res.status == false || res.status == 404 || res.status == 403){
    //                 setCartItemCount(0);
    //                 console.log("ResponseCart: ",res);
    //             }else{
    //                 if(res.data){
    //                     console.log("Cart Count: ",res.data[0]);
    //                     setCartItemCount(res.data[0].cartCount);
    //                 }else{
    
    //                 }
    //             }
    //         })
    
    //     }catch(error){
    //         console.log(error);
    //     }
    //     },[])
    
    


    // console.log(data);

    return (
        <div className={styles['main-layout']}>
            <header className={ styles.header }>
                {/* {
                    cookies.get('accessToken') ? 
                   <HomeHeader type="home" notificationCount={data.notificationCount} cartItemCount={data.cartItemCount} setNotificationCountFunction={setNotificationCountFunction}></HomeHeader>
                    :  */}
                    <Header data={data}></Header>
                    {/* }    */}

                {/* <div className={ cx('top-menubar', styles.menubar) }>
                    <TopMenubar ></TopMenubar>
                </div> */}
            </header>
            <main className={styles['main-content']}>
                {children}
            </main>
            <footer>
                <FooterMenus />
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
