import React, { useEffect, useState } from 'react';
import { Tree, Collapse, Button, Image, Divider } from 'antd';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getGiftCardsByStoreId } from '../../services/gift-cards';

const ServiceDetails = (props) => {
    
    const router = useRouter();
    console.log(props.serviceDetails);
    const [shopgiftCards, setShopGiftCards] = useState([]);
    let storeId = router.query.id;
    
    useEffect(() =>{
        console.log("Props: ",router.query.id);
    })


    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    const onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };

    const handelShowGiftCards = () =>{
        console.log("Entered");
        try{
            getGiftCardsByStoreId(storeId).then(res =>{
                if(res.status){
                    if(res.data){
                        console.log("Gift Card: ",res.data);
                        setShopGiftCards(res.data);
                        router.push({
                            pathname: '/giftcards/3',
                            query: { name: 'Someone' },
                        })
                    }
                }else{
                    
                }
            })
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className="search-filter card no-shadow">
            <h5 className="pl-12">Service Details</h5>
            <Divider className="mt-10 mb-10" />
            <ul className="service-info p-12">
                <li>
                    <span className="material-icons">monetization_on</span>
                    Minimum Service Charge <strong>{props?.serviceDetails?.StoreAddSetting?.minimumOrderPrice}</strong>
                </li>
                <li>
                    <span className="material-icons">date_range</span>
                    <strong>Open Today</strong> (Mon - Sun)
                </li>
                <li>
                    <span className="material-icons">dinner_dining</span>
                    Serves <strong>{props?.serviceDetails.StoreAddSetting?.DemorgraphicType?.name}</strong>
                </li>
                {/* <li>
                    <span className="material-icons">wc</span>
                    Gender <strong>Male</strong>
                </li> */}
            </ul>
            <Divider className="mt-10 mb-10" />
            <h5 className="pl-12">Store Policies</h5>
            <div className="p-12 txt underline">
                <Link href="#" passHref={true}>Payments</Link>
                <br />
                <Link href="#" passHref={true}>Rescheduling and Cancellation</Link>
            </div>

            <Divider className="mt-10 mb-10" />
            <h5 className="pl-12">Portfolio Images</h5>
            <div className="portfolio-images p-12">
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
            </div>
            
            <Divider className="mt-10 mb-10" />
            <h5 className="pl-12">Gift Cards</h5>
            <div className="p-12">
                <Button onClick={handelShowGiftCards}>Show Gift Cards.</Button>
                {/* <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/>
                <Image src="/Subscription-banner.png" alt=""/> */}
            </div>
            
            <Divider className="mt-10 mb-10" />
            <h5 className="pl-12">About Me</h5>
            <p className="p-12">{props?.serviceDetails?.description}</p>
            
            <Divider className="mt-10 mb-10" />
            <h5 className="pl-12">Social Media</h5>
            <div className="social-media pl-12 pr-12 pb-12 pt-5">
                <a href="#" target="_blank"><FacebookIcon /></a>
                <a href="#" target="_blank"><TwitterIcon /></a>
                <a href="#" target="_blank"><YouTubeIcon /></a>
                <a href="#" target="_blank"><LinkedInIcon /></a>
            </div>
            
        </div>
    )
}

export default ServiceDetails
