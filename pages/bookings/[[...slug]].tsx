import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import UserLayout from '../../components/User/Layout';
import { Tabs } from 'antd';
import AcceptedBookings from './accepted-bookings';
import PastBookings from './past-booking';
import RecheduleBookings from './reschedule';
import RejectedBookings from './rejected';
import CustomerLayout from '../../components/User/Customer-Layout';
import { getNotifications } from '../../services/notification';
import { getCartStatus } from '../../services/header';
import { getMyBalance } from '../../services/payments';

const { TabPane } = Tabs;

const Index = () => {
    const router = useRouter(),
    { slug } = router.query,
    selected_tab = slug && slug[0] ? slug[0] : 'booking-requests',
    
    onTabClick = (key:string, event: any) => {
        router.push(`${process.env.base_url}bookings/${key}`)
    };
    
    const [notificationCount, setNotificationCount] = useState(0);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [myBalance, setMyBalance] = useState(0);

    useEffect(() =>{
        try{
            console.log("CHECK");
            
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
                    setMyBalance(res.walletBalance);
                }else{
                    console.log("error in getting balance");
                    setMyBalance(0);
                }
            }).catch(error =>{
                console.log("Error: ",error);
                setMyBalance(0);
            })


        }catch(error: any){
            console.log(error);
        }
    },[]);

    return (
        <CustomerLayout data={{cartCount: cartItemCount, notificationCount: notificationCount, myBalance: myBalance}}>
            <div className="">
                <h3 className="mb-24">Bookings</h3>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Accepted" key="1">
                        <AcceptedBookings />
                    </TabPane>
                    <TabPane tab="Past Bookings" key="2">
                        <PastBookings />
                    </TabPane>
                    <TabPane tab="Reschedule" key="3">
                        <RecheduleBookings />
                    </TabPane>
                    <TabPane tab="Rejected &amp; Cancelled" key="4">
                        <RejectedBookings />
                    </TabPane>
                </Tabs>
            </div>    
        </CustomerLayout>
    )
}

export default Index;
