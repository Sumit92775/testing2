import LeftSidebar from '../SidebarMenu'
import Header from '../User/Header';
import FooterMenus from '../FooterMenus';
import Footer from '../Footer';
import styles from '../User/Layout.module.scss';
import { useEffect, useState } from 'react';
import { getMyBalance } from '../../services/payments';

const CustomerLayout = ({children, data}) => {

    console.log("Data Customer Layout: ",data);

    const menuItems = [
        {
            path: '/bookings',
            label: 'My Bookings',
            icon: 'shopping_basket'
        },
        {
            path: '/reviews',
            label: 'My Reviews',
            icon: 'stars'
        },
        {
            path: '/payments/wallet',
            label: 'My Wallets',
            icon: 'monetization_on'
        },
        {
            path: '/giftcards/1',
            pathArr: ['/giftcards', '/giftcards/[[...slug]]'],
            label: 'Gift Cards',
            icon: 'card_giftcard'
        },
        {
            path: '/profile',
            label: 'Settings',
            icon: 'settings'
        },
    ]

    const [notificationCount, setNotificationCount] = useState(12);
    const [cartItemCount, setCartItemCount] = useState(10);

    useEffect(() =>{
    try{
        getItemInCart().then(res =>{
            if(res.status){
                if(res.data){
                    setCartItemList(res.data);
                    console.log("Cart List UseEfect: ",res.data);
                    setOrderItemList(res.data);
                    setTotal(res.data);

                    let totalPrice = 0;
                    for(let i = 0 ; i < res.data.length ; i++){
                        let qty = res.data[i].qty;
                        let price = res.data[i].Service.price;
                        totalPrice+=qty*price;
                        }
            
                        console.log("TotalPrice: ",totalPrice);
                        setTotalCost(totalPrice);
                }

            }else{
                console.log(res.status);
            }
        })

        getNotifications(1).then(res =>{
            if(res.status === 404 || res.status === 403 || res.status == false){
                setNotificationCount(0);
            }else{
                setNotificationCount(res?.newNotifications);
            }
        }).catch(error =>{
            console.log(error);
        })

        getCartStatus().then(res =>{
            if(res.status == false || res.status == 404 || res.status == 403){
                setCartItemCount(0);
                console.log("ResponseCart: ",res);
            }else{
                if(res.data){
                    console.log("Cart Count: ",res.data[0]);
                    setCartItemCount(res.data[0].cartCount);
                }else{

                }
            }
        })

        getMyBalance().then(res =>{
            if(res?.status){

            }else{
                console.log("error in getting balance");
            }
        }).catch(error =>{
            console.log("Error: ",error);
        })
        

    }catch(error){
        console.log(error);
    }
    },[])


    const updateCardCount = (newValue) =>{
        setCartItemCount(newValue);
    }

    const updateNotificationCount = (newValue) =>{
        setNotificationCount(newValue)
    }

    return (
        <div className={styles['main-layout']}>
            <LeftSidebar menu_items={menuItems}></LeftSidebar>
            <Header data={data}></Header>
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

export default CustomerLayout
