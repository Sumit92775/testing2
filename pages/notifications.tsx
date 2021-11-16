
import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Divider, message, Pagination} from 'antd';
import styles from '../styles/components/notifications.module.scss';
import Modal from 'antd/lib/modal/Modal';
import NotificationCard from '../components/Common/notification-card';
import ProfileLeft from './profile-left';
import CustomerLayout from '../components/User/Customer-Layout';
import {getNotifications, setNotificationRead} from '../services/notification';
import { getCartStatus } from '../services/header';
import { getMyBalance } from '../services/payments';


const Notifications = () => {

    const [selectedModalName, setSelectedModalName] = useState("");
    const [selectedModal, setSelectedModal] = useState(false);
    const [notificationArray, setNotificationArray] = useState([]);
    const [paginationPage, setPaginationPage] = useState(1);
    const [newNotifications, setNewNotifications] = useState(0);
    const [notificationAvailable, setNotificationAvailable] = useState(true);

    const [notificationCount, setNotificationCount] = useState(0);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [myBalance, setMyBalance] = useState(0);

    useEffect(() =>{
        console.log("UseEffect Run 1 !!");
        message.config({
            duration:  5, top :60
        })
            try{
                getNotifications(paginationPage).then( res =>{
                    if(res.notifications){
                        setNotificationRead().then(res =>{
                            message.success(res.message)
                        }).catch(error =>{
                            message.error(error);
                        })
                        console.log(res.notifications);
                        
                        setNotificationArray(res.notifications);
                        setNewNotifications(res.newNotifications);
                        setNotificationAvailable(true);
                    }else{
                        setNotificationAvailable(false);
                    }
                }).catch(error =>{
                    message.error(error);
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
                        setMyBalance(res.walletBalance);
                    }else{
                        console.log("error in getting balance");
                        setMyBalance(0);
                    }
                }).catch(error =>{
                    console.log("Error: ",error);
                    setMyBalance(0);
                })


            }catch(error:any){
                message.error(error);
            }
        // }
    },[])

    let notificationCard = [
        {title : "Notification",modalName : "notification_and_security", content : 
        [
            {titleColor : "var(--secondary-1)", title : "Review", msg : "Reminder to provide review for completed booking SP15912501 Go to Completed bookings", date : "02/11/2020 12:05 PM"},
            {titleColor : "var(--primary-1)", title : "Review", msg : "Reminder to update the status of booking SP15912501 Go to  bookings", date : "02/11/2020 12:05 PM"},
            {titleColor : "var(--red-1)", title : "Review", msg : "A new booking is made by Chris J for Beard Shaving. Respond to the booking now  Go to booking requests", date : "02/11/2020 12:05 PM"},
            {titleColor : "var(--red-1)", title : "Review", msg : "Chris J has rescheduled the booking SP15912505 to 10/11/2020. Go to booking Requests ", date : "02/11/2020 12:05 PM"},
            {titleColor : "var(--primary-1)", title : "Review", msg : "Chris J has cancelled the booking SP15912505.", date : "02/11/2020 12:05 PM"},
            {titleColor : "var(--red-1)", title : "Review", msg : "Halais 2 is requstion to join as your branch. Go to Branch Requests ", date : "02/11/2020 12:05 PM"},
        ]
    }
];


const handleOk = (evt : any) => {
    console.log('ok clicked', evt)
};

const handleCancel = () => {
    setSelectedModal(false);   
};

const openModal = (type : any) => {
    console.log(type);
    setSelectedModal(true);
    setSelectedModalName(type);
};

const handlePagination = (page: any) =>{

    console.log("PaginationPage: ",page);
    
    try{
        getNotifications(page).then( res =>{
            if(res.notifications){
                setNotificationArray(res.notifications);
                setNewNotifications(res.newNotifications);
                setNotificationAvailable(true);
            }else{
                setNotificationAvailable(false);
            }
        }).catch(error =>{
            message.error(error);
        })

    }catch(error:any){
        message.error(error);
    }
}


    return(
        <CustomerLayout data={{cartCount: cartItemCount, notificationCount: 0, myBalance: myBalance}}>
            <div className={styles['main-container']}>
                <div>
                    <ProfileLeft></ProfileLeft>
                </div>
                <div className={styles['main-container-right']}>
            <div className={styles['wallet-deposit-container']}>
                <div className="card card2 pl-32 pr-32" style={{height : "fit-content", position : "relative", boxShadow : "none"}}>
                    <div className={styles['card-header-container']}>
                        <div className="flex" style={{justifyContent : "space-between"}}>
                            <h5 className="mt-10 mb-10 pl-27 pr-27 fz-18 auto-width">{"Notifications"}</h5>
                            {/* <span className="txt pull-right dark2 flex center-content" onClick={() =>props.modal("Edit Preferences")}><EditIcon/><u>Notification Preferences</u></span> */}
                        </div>
                        <Divider className="mt-5 mb-32"></Divider>
                        {notificationAvailable === false ? 
                        <span className="pull center">No Notifications</span> 
                        : 
                        <div>
                            {
                            notificationArray.map((cardDetails) =>{
                                return(
                                    <div className="mb-40" key={`${cardDetails}`}>
                                        <NotificationCard modal={openModal}  cardDetails={cardDetails}></NotificationCard>
                                    </div>
                                )
                            })
                        }

                        </div>

                    }
                      

                    </div>
                </div>
                <Pagination className="txt float pull right" defaultCurrent={1} total={notificationArray.length} onChange={(event) => handlePagination(event)}/>

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
                        <Button className="mr-20" onClick={handleCancel}>Cancel</Button>
                        <Button className="ant-btn primary mr-21">Save Chages</Button>
                    </div>
                    } visible={selectedModal} onOk={handleOk} onCancel={handleCancel}>
                        <div>
                            <strong className="mr-20">Set Notifications Preference:</strong>
                            <Checkbox>Email</Checkbox>
                            <Checkbox>Sms</Checkbox>
                        </div>
                </Modal>

           
           
           
           
            </div> 

            </div>
            </div>    
        </CustomerLayout>
    
    )
}

export default Notifications;
