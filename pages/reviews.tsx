import React, { useEffect, useState } from 'react'
import Layout from '../components/User/Layout';
import ReviewsComponent from '../components/Common/Reviews';
import CustomerLayout from '../components/User/Customer-Layout';
// import { useDispatch, useSelector } from 'react-redux';
// import {details} from '../reducers/details';
// import { getMyDetails } from '../services/addresses';
import { getNotifications } from '../services/notification';
import { getCartStatus } from '../services/header';
import { getMyBalance } from '../services/payments';
// import { userDetails } from '../reducers/userDetails';

const Reviews = () => {

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
            <div>
                <h3 className="mb-47">Reviews</h3>
                <ReviewsComponent />
            </div>
        </CustomerLayout>
    )
}

export default Reviews
