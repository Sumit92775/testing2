import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import AdminLayout from '../../components/Admin/Layout';
// import Providers from '../../components/Admin/kyc/Providers';
import { Tabs } from 'antd';
import CustomerLayout from '../../components/User/Customer-Layout';
import { getNotifications } from '../../services/notification';
import { getCartStatus } from '../../services/header';
import { getMyBalance } from '../../services/payments';

const Index = () => {
    const router = useRouter(),
    { slug } = router.query,
    selected_tab = slug && slug[0] ? slug[0] : 'providers',
    
    onTabClick = (key:string, event: any) => {
        router.push(`${process.env.base_url}kyc/${key}`)
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
                <h3 className="mb-24">KYC Applications</h3>
                <Tabs className="wide-tabs" activeKey={selected_tab} onTabClick={ onTabClick }>
                    <Tabs.TabPane tab="Providers" key="providers">
                        {/* <Providers /> */}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Freelancers" key="freelancers">
                        {/* <Providers /> */}
                    </Tabs.TabPane>
                </Tabs>
            </div>    
        </CustomerLayout>
    )
}

export default Index
