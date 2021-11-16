import React, { useState, useEffect } from 'react';
import PublicLayout from '../components/Public/Layout';
import SearchResultCard from '../components/Cards/SearchResult';
import SearchFilters from '../components/Cards/SearchFilter';
import { Tree, Collapse, Select, Form, Switch, Divider, message } from 'antd';
import MapViewUser from '../components/Common/MapViewUser'
import { getStoreByLocation } from '../services/home';
import { getNotifications } from '../services/notification';
import { getCartStatus } from '../services/header';
const Search = () => {

    const [ map, toggleMap ] = useState(<div className="full mtn-25"></div>);
    const [storeLatLong, setStoreLatLong] = useState([] as any);
    
    const [notificationCount, setNotificationCount] = useState(0);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        try{
            getStoreByLocation().then( res =>{
                if(res.status){
                    console.log("Response: ",res);
                    if(res.data){
                        let totalStores = res.data;
                        let dataArray = [];
                        for(let i = 0 ; i < totalStores.length ; i++){
                            dataArray.push({
                                lat: totalStores[i].latitude,
                                lng: totalStores[i].longitude
                            })
                        }

                        console.log("DataArray: ",dataArray);
                        setStoreLatLong(dataArray);
                    }

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

        }catch(error: any){
            message.error(error);
        }
    },[])

    let listing = [
        {
            images: ['/Subscription-banner.png','/Subscription-banner.png','/Subscription-banner.png','/Subscription-banner.png'],
            sponsored: true,
            name: 'Halais',
            address: 'Jeddah Nazlah Dist, 1234',
            rating: 3.5,
            reviews: 490,
            likes: 242,
            startingPrice: 49,
            offers: [
                {
                    name: 'Home Made',
                    price: '49',
                    selected: true
                },
                {
                    name: 'Food Truck',
                    price: '199',
                    selected: false
                }
            ]
        },
        {
            images: ['/Subscription-banner.png','/Subscription-banner.png','/Subscription-banner.png','/Subscription-banner.png'],
            sponsored: true,
            name: 'Halais',
            address: 'Jeddah Nazlah Dist, 1234',
            rating: 3.5,
            reviews: 490,
            likes: 242,
            startingPrice: 49,
            offers: [
                {
                    name: 'Home Made',
                    price: '49',
                    selected: true
                },
                {
                    name: 'Food Truck',
                    price: '199',
                    selected: false
                }
            ]
        },
        {
            images: ['/Subscription-banner.png','/Subscription-banner.png','/Subscription-banner.png','/Subscription-banner.png'],
            sponsored: true,
            name: 'Halais',
            address: 'Jeddah Nazlah Dist, 1234',
            rating: 3.5,
            reviews: 490,
            likes: 242,
            startingPrice: 49,
            offers: [
                {
                    name: 'Home Made',
                    price: '49',
                    selected: true
                },
                {
                    name: 'Food Truck',
                    price: '199',
                    selected: false
                }
            ]
        },
        {
            images: ['/Subscription-banner.png','/Subscription-banner.png','/Subscription-banner.png','/Subscription-banner.png'],
            sponsored: true,
            name: 'Halais',
            address: 'Jeddah Nazlah Dist, 1234',
            rating: 3.5,
            reviews: 490,
            likes: 242,
            startingPrice: 49,
            offers: [
                {
                    name: 'Home Made',
                    price: '49',
                    selected: true
                },
                {
                    name: 'Food Truck',
                    price: '199',
                    selected: false
                }
            ]
        },
        {
            images: ['/Subscription-banner.png','/Subscription-banner.png','/Subscription-banner.png','/Subscription-banner.png'],
            sponsored: true,
            name: 'Halais',
            address: 'Jeddah Nazlah Dist, 1234',
            rating: 3.5,
            reviews: 490,
            likes: 242,
            startingPrice: 49,
            offers: [
                {
                    name: 'Home Made',
                    price: '49',
                    selected: true
                },
                {
                    name: 'Food Truck',
                    price: '199',
                    selected: false
                }
            ]
        }
    ];

    const switchMap = (checked:boolean, event:Event) => {
        if(checked) {
            // toggleMap(<div className="full mtn-25"><div className="map-placeholder"></div></div>)
            toggleMap(<div className="full mtn-25"><MapViewUser storeLatLong={storeLatLong}></MapViewUser></div>)
        } else {
            toggleMap(<div className="full mtn-25"></div>)
        }
    }

    return (
        <PublicLayout data={{cartCount: cartItemCount, notificationCount: notificationCount}}>
            <div className="search-page">
                <div>
                    <SearchFilters />
                </div>
                <div className="search-results">
                    <Form className="search-header full">
                        <h6 className="regular">Showing ‘page 1 of 10’ for Freelancer ‘<strong>Home Made Foods</strong>’ </h6>
                        <Form.Item className="inline" label="Sort By" name="min">
                            <Select className="medium2 rounded" defaultValue="lucy" style={{ width: 120 }}>
                                <Select.Option value="jack">Jack</Select.Option>
                                <Select.Option value="lucy">Lucy</Select.Option>
                                <Select.Option value="disabled" disabled>
                                    Disabled
                                </Select.Option>
                                <Select.Option value="Yiminghe">yiminghe</Select.Option>
                            </Select>
                        </Form.Item>
                        <span></span>
                        <Form.Item className="inline" label={ <span><span className="material-icons pull left fz-22 mr-5">map</span> Map View</span> } name="showMap">
                            <Switch className="default" size="small" onChange={ switchMap } />
                        </Form.Item>
                    </Form>
                    { map }
                    { listing.map((item, i) => <SearchResultCard key={i} item={item} /> ) }
                </div>
            </div>
        </PublicLayout>
    )
}

export default Search
