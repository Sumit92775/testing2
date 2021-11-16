import React, { useEffect, useState } from 'react'
import { Button, Divider, Tabs } from 'antd';
import styles from '../styles/components/Settings.module.scss';
import SettingCard from '../components/Common/SettingCard'
import Modal from 'antd/lib/modal/Modal';
import ResetPassword from '../components/Common/ResetPassword';
import GeneralSettingsModal from '../pages/settings-modals/Edit-General-Settings_Modal';
import BookingAndPaymentsModal from './settings-modals/Booking-Payments-Modal';
import NotificationAndSecurity from './settings-modals/Notification-And-Security.Modal';
import SubscriptionTiersModal from './settings-modals/Subscription-Tiers-Modal';
import ProfileLeft from './profile-left';
import CustomerLayout from '../components/User/Customer-Layout';
import { getNotifications } from '../services/notification';
import { getCartStatus } from '../services/header';
import { getMyBalance } from '../services/payments';


const Settings = () => {

    let profileCards = [
        {
            title: "General Settings", modalName: "general_settings", content: [{ 0: "Time Zone", 1: "Arabian Standard Time (GMT+3)" },
            { 0: "Tax Rate", 1: "10%" },
            { 0: "Date Format", 1: "18 Nov, 2020" },
            ]
        },
        {
            title: "Notification & Security", modalName: "notification_and_security", content: [{ 0: "Notification Methods", 1: "SMS, E-Mail" },
            { 0: "Password", 1: "xxxxxx" },
            ]
        },
        {
            title: "Booking & Payments", modalName: "booking_and_payments", content: [{ 0: "Payout Frequency", 1: "Daily" },
            { 0: "Pay at Venue", 1: "Yes" },
            { 0: "Allowed to book time", 1: "30 Minutes" },
            ]
        },
        {
            title: "Subscription Tiers", modalName: "subscription_tier", content: [{ 0: "Current Plan", 1: "Professional Next Billing Date 15 Nov, 2021" },
            ]
        },
    ];

const [selectedModalName, setSelectedModalName] = useState("");
const [selectedModal, setSelectedModal] = useState(false);
const [subscriptionTiers, setSubscriptionTiers] = useState(false);
const [del, setDel] = useState(false);
const [myBalance, setMyBalance] = useState(0);


const handleOk = (evt : any) => {
    console.log('ok clicked', evt)
};

const handleCancel = () => {
    setSelectedModal(false);   
    setSubscriptionTiers(false);
};

const openModal = (type : any) => {

    console.log(type);

    if(type === "subscription_tier"){
        setSubscriptionTiers(true);
    }else{
        setSelectedModal(true);
    }

    switch(type){
        case "general_settings" : setSelectedModalName("General Settings");
        break;
        
        case "notification_and_security" : setSelectedModalName("Notification And Security");
        break;
        
        case "booking_and_payments" : setSelectedModalName("Booking And Payments");
        break;
        
        case "subscription_tier" : setSubscriptionTiers(true);
        break;

        case "Change Password" : setSelectedModalName("Change Password");
        break;
    }
};

const [notificationCount, setNotificationCount] = useState(0);
const [cartItemCount, setCartItemCount] = useState(0);

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
            <div className={styles['main-container']}>
                <div>
                    <ProfileLeft></ProfileLeft>
                </div>
                <div className={styles['main-container-right']}>
                <div className={styles['wallet-deposit-container']}>
                    <div className="card card2 p-0" style={{height : "fit-content", position : "relative"}}>
                        <div className={styles['card-header-container']}>
                            <h5 className="mt-22 pb-21 pl-27 pr-27">Account Settings
                            <div>
                                    <span className="primary-txt mr-16 fz-16 txt weight400" onClick={()=>openModal("Change Password")}>Change Password</span>
                            </div>
                            </h5>
                        </div>
                        <Divider className="mt-0"></Divider>
                    <div className="pt-20 pl-38 pr-38">
                        {
                            profileCards.map((cardDetails) =>{
                                return(
                                    <div className="mb-40" key={cardDetails.title}>
                                        <SettingCard modal={openModal} modalName={cardDetails.modalName} cardDetails={cardDetails}></SettingCard>
                                    </div>
                                )
                            })
                        }
                    </div>

                    
                    </div>

                    <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                            <div style={{width : "100%", 
                            height: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            alignItems: "center"}}>
                                <h4 className="txt primary">{selectedModalName}</h4>
                            </div>
                    } footer={
                        <div className="pt-20 pb-20 pr-0">
                            <Button className="mr-20" >Cancel</Button>
                            <Button className="ant-btn primary mr-21">Save Chages</Button>
                        </div>
                        } visible={selectedModal} onOk={handleOk} onCancel={handleCancel}>
                            {selectedModalName === "General Settings" ?
                            <GeneralSettingsModal></GeneralSettingsModal>
                            :
                            selectedModalName === "Notification And Security" ? 
                            <NotificationAndSecurity></NotificationAndSecurity>:
                            
                            selectedModalName === "Booking And Payments" ? 
                            <BookingAndPaymentsModal></BookingAndPaymentsModal> :

                            selectedModalName === "Change Password" ? 
                            <ResetPassword></ResetPassword> :
        
                            <BookingAndPaymentsModal></BookingAndPaymentsModal>
                            }
                    </Modal>


                    <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} footer={
                        ""} visible={subscriptionTiers} onOk={handleOk} onCancel={handleCancel}>
                            
                            <SubscriptionTiersModal></SubscriptionTiersModal>
                            
                    </Modal>


                </div>     
                </div>
            </div>    
        </CustomerLayout>
    
    )
}

export default Settings;



// const Settings = () => {

//     let profileCards = [
//         {title : "General Settings",modalName : "general_settings", content : [{0 : "Time Zone", 1 : "Arabian Standard Time (GMT+3)"},
//             {0 : "Tax Rate", 1 : "10%"},
//             {0 : "Date Format", 1 : "18 Nov, 2020"},
// ]},
//         {title : "Notification & Security",modalName : "notification_and_security", content : [{0 : "Notification Methods", 1 : "SMS, E-Mail"},
//             {0 : "Password", 1 : "xxxxxx"},
// ]},
//         {title : "Booking & Payments",modalName : "booking_and_payments", content : [{0 : "Payout Frequency", 1 : "Daily"},
//             {0 : "Pay at Venue", 1 : "Yes"},
//             {0 : "Allowed to book time", 1 : "30 Minutes"},
// ]},
//         {title : "Subscription Tiers",modalName : "subscription_tier", content : [{0 : "Current Plan", 1 : "Professional Next Billing Date 15 Nov, 2021"},
// ]},
// ];

// const [selectedModalName, setSelectedModalName] = useState("");
// const [selectedModal, setSelectedModal] = useState(false);
// const [subscriptionTiers, setSubscriptionTiers] = useState(false);

// const handleOk = (evt : any) => {
//     console.log('ok clicked', evt)
// };

// const handleCancel = () => {
//     setSelectedModal(false);   
//     setSubscriptionTiers(false);
// };

// const openModal = (type : any) => {

//     console.log(type);

//     if(type === "subscription_tier"){
//         setSubscriptionTiers(true);
//     }else{
//         setSelectedModal(true);
//     }

//     switch(type){
//         case "general_settings" : setSelectedModalName("General Settings");
//         break;
        
//         case "notification_and_security" : setSelectedModalName("Notification And Security");
//         break;
        
//         case "booking_and_payments" : setSelectedModalName("Booking And Payments");
//         break;
        
//         case "subscription_tier" : setSubscriptionTiers(false);
//         break;

//         case "Change Password" : setSelectedModalName("Change Password");
//         break;
//     }
// };


//     return(
//         <CustomerLayout>
//             <div className={styles['main-container']}>
//                 <div>
//                     <ProfileLeft></ProfileLeft>
//                 </div>
//                 <div className={styles['main-container-right']}>
//                 <div className={styles['wallet-deposit-container']}>
//                     <div className="card card2 p-0" style={{height : "fit-content", position : "relative"}}>
//                         <div className={styles['card-header-container']}>
//                             <h5 className="mt-22 pb-21 pl-27 pr-27">Account Settings
//                             <div>
//                                     <span className="primary-txt mr-16 fz-16 txt weight400" onClick={()=>openModal("Change Password")}>Change Password</span>
//                             </div>
//                             </h5>
//                         </div>
//                         <Divider className="mt-0"></Divider>
//                     <div className="pt-20 pl-38 pr-38">
//                         {
//                             profileCards.map((cardDetails) =>{
//                                 return(
//                                     <div className="mb-40" key={`${cardDetails}`}>
//                                         <SettingCard modal={openModal} modalName={cardDetails.modalName} cardDetails={cardDetails}></SettingCard>
//                                     </div>
//                                 )
//                             })
//                         }
//                     </div>

                    
//                     </div>

//                     <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
//                             <div style={{width : "100%", 
//                             height: "100%",
//                             display: "grid",
//                             gridTemplateColumns: "1fr",
//                             alignItems: "center"}}>
//                                 <h4 className="txt primary">{selectedModalName}</h4>
//                             </div>
//                     } footer={
//                         <div className="pt-20 pb-20 pr-0">
//                             <Button className="mr-20" >Cancel</Button>
//                             <Button className="ant-btn primary mr-21">Save Chages</Button>
//                         </div>
//                         } visible={selectedModal} onOk={handleOk} onCancel={handleCancel}>
//                             {selectedModalName === "General Settings" ?
//                             <GeneralSettingsModal></GeneralSettingsModal>
//                             :
//                             selectedModalName === "Notification And Security" ? 
//                             <NotificationAndSecurity></NotificationAndSecurity>:
                            
//                             selectedModalName === "Booking And Payments" ? 
//                             <BookingAndPaymentsModal></BookingAndPaymentsModal> :

//                             selectedModalName === "Change Password" ? 
//                             <ResetPassword></ResetPassword> :
        
//                             <BookingAndPaymentsModal></BookingAndPaymentsModal>
//                             }
//                     </Modal>


//                     <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} footer={""} visible={subscriptionTiers} onOk={handleOk} onCancel={handleCancel}>
                            
//                             <SubscriptionTiersModal></SubscriptionTiersModal>
                            
//                     </Modal>


//                 </div>     
//                 </div>
//             </div>    
//         </CustomerLayout>
    
//     )
// }

// export default Settings;
