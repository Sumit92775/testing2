import React, { useEffect, useState } from 'react'
import { Button, Divider, Tabs } from 'antd';
import styles from '../styles/components/Kyc-Application.module.scss';
// import ResetPassword from '../components/Admin/kyc/ResetPassword';
import Modal from 'antd/lib/modal/Modal';
import Link from 'next/link';
import ChangeEmail from './profile/change-email-address';
import ChangePassword from './profile/change-mobile-number';
import KycApplicationCard from './kyc/kyc-application-card';
import ExistingKycCard from './kyc/existing-kyc-card';
import ProfileLeft from './profile-left';
import CustomerLayout from '../components/User/Customer-Layout';
import { getNotifications } from '../services/notification';
import { getCartStatus } from '../services/header';
import { getMyBalance } from '../services/payments';


const KycApplication = () =>{

const [chooseModal, setchooseModal] = useState(false);
const [chooseModalName, setchooseModalName] = useState("");
const [existingKyc, setExistingKyc] = useState(null);


const handleOk = (evt : any) => {
    console.log('ok clicked', evt)
};

const handleCancel = () => {
    setchooseModal(false);
};

const openModal = (type : any) => {

    setchooseModal(true);

    if(type === "Email"){
        setchooseModalName(type)
    }else if(type === "Mobile Number"){
        setchooseModalName(type)
    }

    console.log(type);
};

const kycPresent = (present : any) =>{
    setExistingKyc(present);
}

const [notificationCount, setNotificationCount] = useState(0);
const [cartItemCount, setCartItemCount] = useState(0);
const [myBalance, setMyBalance] = useState(0);

useEffect(() =>{
    try{
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
                                <h5 className="mt-22 pb-21 pl-27 pr-27">KYC Identy Verification
                                </h5>
                            </div>
                        <Divider className="mt-0 mb-0"></Divider>
                    <div className="pl-38 pr-38 pb-43">
                            {/* <Card5></Card5> */}
                            <ExistingKycCard ExistingKyc={kycPresent} present={false}></ExistingKycCard>
                            
                            {existingKyc == false ? 
                                
                                // <ExistingKycCard ExistingKyc={kycPresent}></ExistingKycCard> 
                                <KycApplicationCard></KycApplicationCard>
                                :
                                <>
                                </>
                             }
                    </div>

                    <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                                <div style={{width : "100%", 
                                height: "100%",
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                alignItems: "center"}}>
                                    <h4 className="txt primary">Change {chooseModalName}</h4>
                                </div>
                        } footer={""} visible={chooseModal} onOk={handleOk} onCancel={handleCancel}>
                            {
                                chooseModalName === "Email" ? 
                                <ChangeEmail></ChangeEmail> : 
                                <ChangePassword></ChangePassword>
                            }
                        </Modal>

                    </div>
                </div>     
                </div>
        </div>    
    </CustomerLayout>
    )
}
export default KycApplication;