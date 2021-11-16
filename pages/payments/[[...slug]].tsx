import React, { useEffect, useState } from 'react'
import { Button, Divider, Tabs } from 'antd';
import styles from '../../styles/components/Payment.module.scss';
import { useRouter } from 'next/router';
import DashboardMiniTable from '../../components/Common/DashboardMiniTable';
import Layout from '../../components/User/Layout'
import Wallet from  '../wallet';
import PaymentWalletDeposit from '../../components/Payments/payment-wallet-deposit';
import PaymentWalletPayout from '../../components/Payments/payment-wallet-payout';
import PaymentMethods from '../../components/Payments/payment-methods';
import PaymentDetails from '../../components/Payments/payment-details-1';
import PaymentDetails2 from '../../components/Payments/payment-details-2';
import PaymentDetails3 from '../../components/Payments/payment-details-3';
import PaymentDetails4 from '../../components/Payments/payment-details-4';
import PaymentMethods2 from '../../components/Payments/payment-methods-2';
import CustomerLayout from '../../components/User/Customer-Layout';
import PaymentDetails1 from '../../components/Payments/payment-details-1';
import { getNotifications } from '../../services/notification';
import { getCartStatus } from '../../services/header';
import { getMyBalance } from '../../services/payments';

const Payments = () => {

    const router = useRouter(),
    { slug } = router.query,
    selected_tab = slug && slug[0] ? slug[0] : 'providers',
    
    onTabClick = (key:string, event: any) => {
        router.push(`${process.env.base_url}payments/${key}`)
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

    return(
        <CustomerLayout data={{cartCount: cartItemCount, notificationCount: notificationCount, myBalance: myBalance}}>
        <div className="">
            <h3 className="mb-24">Payments</h3>
            <Tabs className="wide-tabs" activeKey={selected_tab} onTabClick={ onTabClick }>
                <Tabs.TabPane tab="Wallet" key="wallet">
                    <Wallet />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Payment Methods" key="payment-methods">
                    < PaymentMethods/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Payout Details" key="payout-details">
                    <PaymentWalletPayout/>
                </Tabs.TabPane>
            </Tabs>
        </div>    
    </CustomerLayout>
        
    )
}

export default Payments;
