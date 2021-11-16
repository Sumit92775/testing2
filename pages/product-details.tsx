// import React, { useEffect, useState } from 'react';
// import styles from '../styles/components/Product-Details.module.scss'
// import CustomerLayout from '../components/User/Customer-Layout';
// import ShoppingCard from './product-details/shopping-card';
// import OrderFrom from './product-details/order-from';
// import PaymentSummary from './product-details/payment-summary';
// import DefaultAddress from './product-details/address-card';
// import PaymentMethod from './product-details/payment-method';
// // import BookingAndPaymentsModal from './Booking-Payments-Modal';
// import { Button, Modal } from 'antd';
// import EditPreferences from './product-details/edit-preferences-modal';
// import cx from 'classnames';
// import { getItemInCart } from '../services/items';
// import { getNotifications } from '../services/notification';
// import { getCartStatus } from '../services/header';
// import { getMyDetails } from '../services/addresses';
// import { getMyBalance } from '../services/payments';

// const ProductDetails = () =>{
   
// const [selectedModalName, setSelectedModalName] = useState("");
// const [selectedModal, setSelectedModal] = useState(false);
// const [subscriptionTiers, setSubscriptionTiers] = useState(false);

// const [cartItemList, setCartItemList] = useState([]);
// const [notificationCount, setNotificationCount] = useState(0);
// const [cartItemCount, setCartItemCount] = useState(0);
// const [myBalance, setMyBalance] = useState(0);

// // Manish
// // Manish@123

// //----------------------------------------------------------------------------------

// const [orderItemList, setOrderItemList] = useState([] as any);
// const [total, setTotal] = useState([]);
// const [totalCost , setTotalCost] = useState(0);
// const [userName, setUserName] = useState('');

// useEffect(() =>{
//     try{
//         getItemInCart().then(res =>{
//             if(res.status){
//                 if(res.data){
//                     setCartItemList(res.data);
//                     console.log("Cart List UseEfect: ",res.data);
//                     setOrderItemList(res.data);
//                     setTotal(res.data);

//                     let totalPrice = 0;
//                     for(let i = 0 ; i < res.data.length ; i++){
//                         let qty = res.data[i].qty;
//                         let price = res.data[i].Service.price;
//                         totalPrice+=qty*price;
//                       }
            
//                       console.log("TotalPrice: ",totalPrice);
//                       setTotalCost(totalPrice);
//                 }

//             }else{
//                 console.log(res.status);
//             }
//         })

//         getMyDetails().then(res =>{
//             if(res.status){
//                 console.log("Response product details: ",res);
//                 setUserName(res.UserData.userName);
//             }else{
                
//             }
//         })

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

//         getMyBalance().then(res =>{
//             if(res?.status){
//                 setMyBalance(res.walletBalance);
//             }else{
//                 console.log("error in getting balance");
//                 setMyBalance(0);
//             }
//         }).catch(error =>{
//             console.log("Error: ",error);
//             setMyBalance(0);
//         })

//     }catch(error: any){
//         console.log(error);
//     }
    
// },[])


// const handleOk = (evt : any) => {
//     console.log('ok clicked', evt)
// };

// const handleCancel = () => {
//     setSelectedModal(false);   
//     setSubscriptionTiers(false);
// };

// const openModal = (type : any) => {

//     console.log(type);
//     setSelectedModal(!selectedModal);

//     switch(type){
//         case "Edit Preferences" : setSelectedModalName("Edit Preferences");
//         break;
//     }
// };

// const setFinalList = (itemId: any, qty: any) =>{
//     let totalCartItem:any[] = orderItemList;
//     for(let i = 0 ; i < totalCartItem.length ; i++){
//         if(totalCartItem[i].id === itemId){
//             totalCartItem[i].qty = qty;
//         }
//     }

//     console.log("totalCartItem: ", totalCartItem);
//     setOrderItemList(totalCartItem);
    
// }

// const resetUI = () =>{
//     try{
//         getItemInCart().then(res =>{
//             if(res.status){
//                 if(res.data){
//                     setCartItemList(res.data);
//                     console.log("Cart List: ",res.data);
//                     setTotal(res.data);

//                     let totalPrice = 0;

//                     for(let i = 0 ; i < res.data.length ; i++){
//                         let qty = res.data[i].qty;
//                         let price = res.data[i].Service.price;
//                         totalPrice+=qty*price;
//                       }
            
//                       console.log("TotalPrice: ",totalPrice);
//                       setTotalCost(totalPrice);
//                 }
//             }else{
//                 console.log(res.status);
//                 setCartItemList([]);
//                 setTotal([]);
//             }
//         })

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

//     }catch(error: any){
//         console.log(error);
//     }
// }

// const updateCardCount = (newValue: any) =>{
//     setCartItemCount(newValue);
// }

// const updateNotificationCount = (newValue: any) =>{
//     setNotificationCount(newValue)
// }

//     return(
//         <CustomerLayout data={{cartCount: cartItemCount, notificationCount: notificationCount, myBalance: myBalance}}>
//             <div className={styles['container']}>
//                 <div className={styles['left-container']}>
//                     <ShoppingCard modal={openModal} updateCardCount={updateCardCount} updateNotificationCount={updateNotificationCount} cartList={cartItemList} resetUI={resetUI}  finalList={setFinalList}></ShoppingCard>
//                     <div>
//                         <DefaultAddress></DefaultAddress>
//                     </div>
//                     <div className="mt-50">
//                         <PaymentMethod></PaymentMethod>
//                     </div>
//                 </div>
//                 <div className={styles['right-container']}>
//                     <OrderFrom userDetails={{
//                         username: userName
//                     }}></OrderFrom>
//                     <PaymentSummary orderItemList={total} newPrice={totalCost} setCartListAfterOrderPlace={setCartItemList}></PaymentSummary>
//                 </div>
//             </div>
//                 <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
//                                 <div style={{width : "100%", 
//                                 height: "100%",
//                                 display: "grid",
//                                 gridTemplateColumns: "1fr",
//                                 alignItems: "center"}}>
//                                     <h4 className="txt primary">{selectedModalName}</h4>
//                                 </div>
//                         } footer={
//                             <div className="pt-20 pb-20 pr-0">
//                                 <Button className="mr-20" >Cancel</Button>
//                                 <Button className="ant-btn primary mr-21">Save Chages</Button>
//                             </div>
//                             } visible={selectedModal} onOk={handleOk} onCancel={handleCancel}>
                            
//                             {selectedModalName === "Edit Preferences" ? 
//                             <EditPreferences></EditPreferences> 
//                             : 
//                             <>
//                             </>
//                             }
//                 </Modal>
//         </CustomerLayout>
//     )
// }

// export default ProductDetails;



import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Product-Details.module.scss'
import CustomerLayout from '../components/User/Customer-Layout';
import ShoppingCard from './product-details/shopping-card';
import OrderFrom from './product-details/order-from';
import PaymentSummary from './product-details/payment-summary';
import DefaultAddress from './product-details/address-card';
import PaymentMethod from './product-details/payment-method';
// import BookingAndPaymentsModal from './Booking-Payments-Modal';
import { Button, Modal } from 'antd';
import EditPreferences from './product-details/edit-preferences-modal';
import cx from 'classnames';
import { getItemInCart } from '../services/items';
import { getNotifications } from '../services/notification';
import { getCartStatus } from '../services/header';
import { getMyDetails } from '../services/addresses';
import { getMyBalance } from '../services/payments';

const ProductDetails = () =>{
   
const [selectedModalName, setSelectedModalName] = useState("");
const [selectedModal, setSelectedModal] = useState(false);
const [subscriptionTiers, setSubscriptionTiers] = useState(false);

const [cartItemList, setCartItemList] = useState([]);
const [notificationCount, setNotificationCount] = useState(0);
const [cartItemCount, setCartItemCount] = useState(0);
const [myBalance, setMyBalance] = useState(0);

// Manish
// Manish@123

//----------------------------------------------------------------------------------

const [orderItemList, setOrderItemList] = useState([] as any);
const [total, setTotal] = useState([]);
const [totalCost , setTotalCost] = useState(0);
const [userName, setUserName] = useState('');

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
                        let price = res.data[i].Variation.price;
                        totalPrice+=qty*price;
                      }
            
                      console.log("TotalPrice: ",totalPrice);
                      setTotalCost(totalPrice);
                }

            }else{
                console.log(res.status);
            }
        })

        getMyDetails().then(res =>{
            if(res.status){
                console.log("Response product details: ",res);
                setUserName(res.UserData.userName);
            }else{
                
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
    
},[])


const handleOk = (evt : any) => {
    console.log('ok clicked', evt)
};

const handleCancel = () => {
    setSelectedModal(false);   
    setSubscriptionTiers(false);
};

const openModal = (type : any) => {

    console.log(type);
    setSelectedModal(!selectedModal);

    switch(type){
        case "Edit Preferences" : setSelectedModalName("Edit Preferences");
        break;
    }
};

const setFinalList = (itemId: any, qty: any) =>{
    let totalCartItem:any[] = orderItemList;
    for(let i = 0 ; i < totalCartItem.length ; i++){
        if(totalCartItem[i].id === itemId){
            totalCartItem[i].qty = qty;
        }
    }

    console.log("totalCartItem: ", totalCartItem);
    setOrderItemList(totalCartItem);
    
}

const resetUI = () =>{
    try{
        getItemInCart().then(res =>{
            if(res.status){
                if(res.data){
                    setCartItemList(res.data);
                    console.log("Cart List: ",res.data);
                    setTotal(res.data);

                    let totalPrice = 0;

                    for(let i = 0 ; i < res.data.length ; i++){
                        let qty = res.data[i].qty;
                        let price = res.data[i].Variation.price;
                        totalPrice+=qty*price;
                      }
            
                      console.log("TotalPrice: ",totalPrice);
                      setTotalCost(totalPrice);
                }
            }else{
                console.log(res.status);
                setCartItemList([]);
                setTotal([]);
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

    }catch(error: any){
        console.log(error);
    }
}

const updateCardCount = (newValue: any) =>{
    setCartItemCount(newValue);
}

const updateNotificationCount = (newValue: any) =>{
    setNotificationCount(newValue)
}

    return(
        <CustomerLayout data={{cartCount: cartItemCount, notificationCount: notificationCount, myBalance: myBalance}}>
            <div className={styles['container']}>
                <div className={styles['left-container']}>
                    <ShoppingCard modal={openModal} updateCardCount={updateCardCount} updateNotificationCount={updateNotificationCount} cartList={cartItemList} resetUI={resetUI}  finalList={setFinalList}></ShoppingCard>
                    <div>
                        <DefaultAddress></DefaultAddress>
                    </div>
                    <div className="mt-50">
                        <PaymentMethod></PaymentMethod>
                    </div>
                </div>
                <div className={styles['right-container']}>
                    <OrderFrom userDetails={{
                        username: userName
                    }}></OrderFrom>
                    <PaymentSummary orderItemList={total} newPrice={totalCost} setCartListAfterOrderPlace={setCartItemList}></PaymentSummary>
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
                            
                            {selectedModalName === "Edit Preferences" ? 
                            <EditPreferences></EditPreferences> 
                            : 
                            <>
                            </>
                            }
                </Modal>
        </CustomerLayout>
    )
}

export default ProductDetails;