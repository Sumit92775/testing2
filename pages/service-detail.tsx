import React, { useState, useEffect } from 'react';
import PublicLayout from '../components/Public/Layout';
import ServiceCard from '../components/Cards/ServiceCard';
import ServiceDetails from '../components/Cards/ServiceDetails';
import Reviews from '../components/Common/Reviews';
import { Tree, InputNumber, Select, Form, Button, Input, Tabs, message } from 'antd';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { StarOutlined } from '@material-ui/icons';
import { editCartItem, getItemInCart, getServicesListByStoreId, getStoreByStoreId } from '../services/items';
import Link from "next/link";
import { getNotifications } from '../services/notification';
import { getCartStatus } from '../services/header';

const ServiceDetail = (props: any) => {
    const router = useRouter(),
    { slug } = router.query;
    let query = router.query;
    let id = query.id;
    console.log("Router Router: ",id);
    const [page, setPage] = useState(id);
    const [ selected_tab, changeSelectedTab ] = useState('restaurants');
    
    const [serviceDetails, setServiceDetails] = useState([]);
    const [serviceList, setServiceList] = useState([]);
    const [cartItemList, setCartItemList] = useState([]);

    const [keyValueArray, setKeyValueArray] = useState([]);
    const [serviceDetail, setServiceDetail] = useState([]);

    
    const [notificationCount, setNotificationCount] = useState(0);
    const [cartItemCount, setCartItemCount] = useState(0);

    const onTabClick = (key:string, event: any) => {
        changeSelectedTab(key);
    };
    
    useEffect(() =>{

        let query = router.query;
        let id = query.id;
        console.log("Router: ",id);

        try{
            getStoreByStoreId(page).then(res =>{
                if(res.status){
                    console.log("Service Details Response: ",res);
                    setServiceDetails(res.data[0]);
                }else{
                    message.error(res.status);
                    setServiceDetails([]);
                }

                getServicesListByStoreId(page).then(res =>{
                    if(res.status){
                        console.log("Service List Store By Store Id: ",res);
                        setServiceList(res.data);
                    }else{
                        console.log("Error in Service List Store By Store Id: ",res);
                        setServiceList([]);
                    }
                })

                getItemInCart().then(res =>{
                    if(res.status){
                        setCartItemList(res.data);
                        console.log("Cart List: ",res.data);
                        var itemInCartArray = res.data;
                        getServicesListByStoreId(page).then(res =>{
                            if(res.status){
                                console.log("Inside: ",itemInCartArray);
                                // let cartItemsArray = itemInCartArray;
                                let cartItems1Array = itemInCartArray;
                                let serviceItemArray = res.data;
                                let serviceItemArray1 = res.data;

                                console.log("ServiceItemArray: ",serviceItemArray);
                                
                                for(let i = 0 ; i < serviceItemArray.length ; i++){
                                    for(let j = 0 ; j < cartItems1Array.length ; j++){
                                        if(serviceItemArray[i].id === cartItems1Array[j].serviceId){
                                            serviceItemArray1[i].alreadyAdded = "true";
                                            console.log("Array: ",serviceItemArray1[i]);
                                            
                                        }else{
                                            // serviceItemArray1[i].alreadyAdded = "check";
                                        }
                                        console.log(serviceItemArray[i].id+" "+cartItems1Array[j].serviceId);
                                    }
                                }

                        

                                console.log("Service Array After Sorting: ",serviceItemArray1);
                                
                                console.log("Service List Store By Store Id1: ",res);
                                setServiceList(serviceItemArray1);
                            }else{
                                console.log("Error in Service List Store By Store Id1: ",res);
                                setServiceList([]);
                            }  
                        })

                        let cartItemArray = res.data;
                        for(let i = 0 ; i < res.data.length ; i++){
                            if(res.data[i].id == 1){

                            }else{

                            }
                        }
                    }else{
                        console.log("Error in cart: ",res);
                        setCartItemList([]);
                    }
                });

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
        }catch(error){
            console.log("Error in getting store by store id: ",error);   
        }
            
    },[]);

    const resetUI = () =>{
        
        console.log("Key Value Array: ", keyValueArray);
        console.log("Cart Item List: ", cartItemList);
        

        getItemInCart().then(res =>{
            if(res.status){
                setCartItemList(res.data);
                console.log("Cart List: ",res.data);
                var itemInCartArray = res.data;
                getServicesListByStoreId(id).then(res =>{
                    if(res.status){
                        if(res.data){
                            
                            console.log("Inside: ",itemInCartArray);
                            // let cartItemsArray = itemInCartArray;
                            let cartItems1Array = itemInCartArray;
                            let serviceItemArray = res.data;
                            let serviceItemArray1 = res.data;
    
                            console.log("ServiceItemArray: ",serviceItemArray);
                            
                            for(let i = 0 ; i < serviceItemArray.length ; i++){
                                for(let j = 0 ; j < cartItems1Array.length ; j++){
                                    if(serviceItemArray[i].id === cartItems1Array[j].serviceId){
                                        serviceItemArray1[i].alreadyAdded = "true";
                                        console.log("Array: ",serviceItemArray1[i]);
                                        
                                    }else{
                                        // serviceItemArray1[i].alreadyAdded = "check";
                                    }
                                    console.log(serviceItemArray[i].id+" "+cartItems1Array[j].serviceId);
                                }
                            }
    
                            console.log("Service Array After Sorting: ",serviceItemArray1);
                            
                            console.log("Service List Store By Store Id1: ",res);
                            setServiceList(serviceItemArray1);
                        }else{
                            console.log(res.status);
                            setServiceList([]);
                        }
                    }else{
                        console.log("Error in Service List Store By Store Id1: ",res);
                        setServiceList([]);
                    }  
                })
            }else{
               console.log(res.status);
               setCartItemList([]);
               getServicesListByStoreId(id).then(res =>{
                if(res.status){
                    console.log("Reset UI: ",res);
                    setServiceList(res.data);
                }else{
                    console.log("Error in Service List Store By Store Id1: ",res);
                    setServiceList([]);
                }  
            })
            }
        }).catch(error =>{
            console.log("Error in resetUI",error);
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
    }

    const handelEditQuantity = (qty: any, index: any) =>{
        console.log("Quantity Edited: ",qty);
        console.log("Key Value Array: ",keyValueArray);
        try{
            getItemInCart().then(res =>{
                if(res.status){
                    if(res.data){
                        let cartItemArray = res.data;
                        for (const key in cartItemArray) {
                            if(cartItemArray[key].id === index){
                               
                                let keyValueObjectsArray = cartItemArray[key].CartProperties;
                                let keyArray = [];
                                let valueArray = [];
    
                                for(let i = 0 ; i < keyValueObjectsArray.length ; i++){
                                    keyArray.push(keyValueObjectsArray[i].key)
                                    valueArray.push(keyValueObjectsArray[i].value)
                                }
                                // console.log("Key: ",keyArray);
                                // console.log("Value: ",valueArray);
                            
                                // console.log("ID: ",index);
                                
    
                                editCartItem({
                                    qty: qty,
                                    id: index,
                                    keys: keyArray,
                                    value: valueArray
                                }).then(res =>{
                                    console.log(res);
                                })
                            }
                        }
                    }else{
                        console.log(res.status);
                    }
                }else{
                    console.log(res.status);
                }
            }).catch(error =>{
                console.log(error);
            })

          
        }catch(error){

        }
    }

    const services = serviceList ? serviceList.map((item, i) => <ServiceCard key={i} item={item} resetUI={resetUI} setKeyValueArray={setKeyValueArray} setServiceDetail={setServiceDetail}/>  ) : [];
    const user_types = ['Low to High', 'High to Low'];
    const location = ['Location 1', 'Location 2'];


    return (
        <PublicLayout data={{cartCount: cartItemCount, notificationCount: notificationCount}}>
            <section className="banner banner-3">
                <Image layout="fill" src="/slider 1.jpg" alt="" />
            </section>
            <div className="search-page">
                <div>
                    <ServiceDetails  serviceDetails={serviceDetails}/>
                </div>
                <div className="search-results service-page">
                    <h3><StarOutlined /> Services</h3>
                    <Tabs className="wide-tabs" activeKey={selected_tab} onTabClick={ onTabClick }>
                        <Tabs.TabPane tab="Restaurants" key="restaurants">
                            <Form className="medium full-width">
                                <div className="pull-left auto-width mb-20" style={{ minWidth: '350px' }}>
                                    <Input className="search-field" size="small" placeholder="Search For Dishes" prefix={<span className="material-icons">search</span>} />
                                </div>
                                <Form.Item className="auto-width pull-right ml-30">
                                    <Select className="medium" defaultValue={location[0]}>
                                        {location.map(option => (
                                            <Select.Option key={option} value={option}>{option}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>

                                <Form.Item className="auto-width pull-right">
                                    <Select className="medium" defaultValue={user_types[0]}>
                                        {user_types.map(option => (
                                            <Select.Option key={option} value={option}>{option}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Form>
                            <div className="service-details mt-30 mb-30">
                                <div>
                                    <h3 className="mb-30">Fine Dining</h3>
                                    <div>
                                        <h4 className="regular mb-20">Appetizer</h4>
                                        { services }
                                        <p className="fz-12 txt light1 center">end of Appetizer</p>
                                    </div>
                                    <div className="mt-50">
                                        <h4 className="regular mb-20">Entrees</h4>
                                        { services }
                                        <p className="fz-12 txt light1 center">end of Entrees</p>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="fz-19 mb-50">Fine Dining</h5>

                                    <div className="cart-items">
                                        <strong className="title">Order Value</strong>
                                        <ul>
                                            {
                                            (cartItemList.length > 0 ) ? 
                                            <div>
                                                {cartItemList.map((cartItem: any, i: any) =>{
    
                                               return( 
                                               <li key={`${cartItem.id}`}>
                                                    {cartItem?.Variation?.Service?.primaryServiceName}
                                                    <strong className="pull-right">${cartItem?.Variation?.price}</strong>
                                                    <br />
                                                    <InputNumber min={1} max={10} contentEditable={false} defaultValue={cartItem?.qty} onChange={(event) => {
                                                        handelEditQuantity(event, cartItem.id);
                                                        }} />
                                                </li>
                                                )
    
                                                })}
                                            </div>
                                            : 
                                            <span>Cart is empty.</span>
                                            }
                                        </ul>
                                    </div>
                                    <Button className="medium full-width primary mt-10" disabled={cartItemList.length >= 1 ? false : true}>
                                        <Link href="/product-details" passHref={true}>
                                            Continue To Cart
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <Reviews />
                        </Tabs.TabPane>
                        {/* <Tabs.TabPane tab="Beauty Shops" key="beautyShops">
                            { services }
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Clinics" key="clinics">
                            { services }
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Driving Training" key="drivingTraining">
                            { services }
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Beverages" key="beverages">
                            { services }
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Bakery and Desserts" key="bakeryAndDesserts">
                            { services }
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Sports Clubs" key="sportsClubs">
                            { services }
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Venue" key="venue">
                            { services }
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Gift Shop " key="giftShop">
                            { services }
                        </Tabs.TabPane> */}
                    </Tabs>
                </div>
            </div>
        </PublicLayout>
    )
}

export default ServiceDetail;

ServiceDetail.getInitialProps = async (data: any) => {
    const {id} = data.query
    return {id: id}
  }
