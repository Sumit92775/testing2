
import { Button, Carousel, Steps } from 'antd';
import PublicLayout from '../components/Public/Layout';
import Image from 'next/image';
import SubscriptionCard from "../components/Common/SubscriptionCard";
import Switch from '../components/Common/Switch';
import styles from '../styles/components/Subscriptions-Tier.module.scss';
import { useEffect, useState } from 'react';
import { getNotifications } from '../services/notification';
import { getCartStatus } from '../services/header';

// const { Step } = Steps;

export default function Subscriptions() {
    const subscriptions = [
        {
            price: 60,
            desc: `Per Month, Billed Annually or 
            $5 Month - to - Month`,
            title: 'Basic',
            sub_title: 'Basic Plan Features',
            features: [
                { name: 'Upcoming booking visibility', value: '7 Days', available: true},
                { name: 'Past Booking visibility', value: '7 Days', available: true},
                { name: 'Branches', value: 'Upto 5', available: true},
                { name: 'Category', value: '2', available: true},
                { name: 'Sub-Category', value: '1', available: true},
                { name: 'Menu', value: '3 Titles', available: true},
                { name: 'Staff Management', value: 'No', available: false},
                { name: 'Gift Card Creation', value: 'No', available: false},
                { name: 'Reports', value: '7 Days', available: true},
                { name: 'SP Policy ', value: 'Regular Season ONLY', available: true},
                { name: 'Other related functionality', value: 'No', available: false},
            ],
            button_txt: 'Start 30 Days Free Trial',
            is_premium: false
        },
        {
            price: 180,
            desc: `Per Month, Billed Annually or 
            $15 Month - to - Month`,
            title: 'Standard',
            sub_title: 'Standard Plan Features',
            features: [
                { name: 'Upcoming booking visibility', value: '14 Days', available: true},
                { name: 'Past Booking visibility', value: '14 Days', available: true},
                { name: 'Branches', value: 'Upto 10', available: true},
                { name: 'Category', value: '4', available: true},
                { name: 'Sub-Category', value: '3', available: true},
                { name: 'Menu', value: '6 Titles', available: true},
                { name: 'Staff Management', value: 'Upto 25', available: true},
                { name: 'Gift Card Creation', value: 'Yes', available: true},
                { name: 'Reports', value: '14 Days', available: true},
                { name: 'SP Policy ', value: 'Regular + High Seasons', available: true},
                { name: 'Other related functionality', value: 'Yes', available: true},
            ],
            button_txt: 'Start 30 Days Free Trial',
            is_premium: true
        },
        {
            price: 1200,
            desc: `Per Month, Billed Annually or 
            $120 Month - to - Month`,
            title: 'Professional',
            sub_title: 'Professional Plan Features',
            features: [
                { name: 'Upcoming booking visibility', value: '30 Days', available: true},
                { name: 'Past Booking visibility', value: '30 Days', available: true},
                { name: 'Branches', value: 'Unlimited', available: true},
                { name: 'Category', value: '12', available: true},
                { name: 'Sub-Category', value: '5', available: true},
                { name: 'Menu', value: '18 Titles', available: true},
                { name: 'Staff Management', value: 'Unlimited', available: true},
                { name: 'Gift Card Creation', value: 'Yes', available: true},
                { name: 'Reports', value: '30 Days', available: true},
                { name: 'SP Policy ', value: 'Regular + High Seasons', available: true},
                { name: 'Other related functionality', value: 'Yes', available: true},
            ],
            button_txt: 'Start 30 Days Free Trial',
            is_premium: false
        }
    ],
    stats = [
        {
            icon: 'store_mall_directory',
            value: '2000',
            label: 'Active Providers'
        },
        {
            icon: 'local_activity',
            value: '802100',
            label: 'Business Volume'
        },
        {
            icon: 'people',
            value: '21000',
            label: 'Customers'
        }
    ]

    const contentStyle = {

        st : {

            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
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

        }catch(error: any){
            console.log(error);
        }
    },[]);

    return (
        <PublicLayout data={{cartCount: cartItemCount, notificationCount: notificationCount}}>
            <section className="banner home">
                <Image layout="fill" src="/Subscription-banner.png" alt="" />
                <div className="overlay-content">
                    <h1 className="txt white">
                        An Attractive Hero Text Goes Here <br />
                        To Grab the attentions!
                    </h1>
                    <h5 className="txt white">A supportive text to elaborate the idea to a more specific deal</h5>
                    <button className="ant-btn primary mt-50">Become A Provider</button>
                </div>
            </section>
            <section className="stats-bar">
                <div className="stats">
                    { stats.map((stat, i) => (
                        <div key={i} className="stat">
                            <span className="stat-icon material-icons pull-left txt primary fz-36">{ stat.icon }</span>
                            <h5 className="stat-value txt primary">{ stat.value }</h5>
                            <span className="stat-label">{ stat.label }</span>
                        </div>
                    ))}
                </div>
            </section>

{/* /// ------------------------------------------------------------------------------------------------ */}

{/*      
            <section>
                <div className={styles['ser-pro-container']}>
                    <div className={styles['ser-pro-left']}>
                        <div className={styles['ser-pro-left-title']}>
                            <h3>Services</h3>
                        </div>
                        <div className={styles['ser-pro-left-content']}>
                            <div className={styles['set-pro-left-content-list']}>
                                <div><h1 className={styles['fab']}> <span className="material-icons fz-70">pause</span>
                                    <span style={{lineHeight : "26px"}}>Software Development</span>
                                </h1></div>
                            </div>
                            
                            <div className={styles['set-pro-left-content-list']}>
                                <div><h1 className={styles['fab']}> <span className="material-icons fz-70">pause</span>
                                    <span style={{lineHeight : "26px"}}>Software Development</span>
                                </h1></div>
                            </div>
                            
                            <div className={styles['set-pro-left-content-list']}>
                                <div><h1 className={styles['fab']}> <span className="material-icons fz-70">pause</span>
                                    <span className="lh-26">Software Development</span>
                                </h1></div>
                            </div>
                            
                            <div className={styles['set-pro-left-content-list']}>
                                <div><h1 className={styles['fab']}> <span className="material-icons fz-70">pause</span>
                                    <span className="lh-26">Software Development</span>
                                </h1></div>
                            </div>
                            
                            <div className={styles['set-pro-left-content-list']}>
                                <div><h1 className={styles['fab']}> <span className="material-icons fz-70">pause</span>
                                    <span className="lh-26">Software Development</span>
                                </h1></div>
                            </div>
                            
                            <div className={styles['set-pro-left-content-list']}>
                                <div><h1 className={styles['fab']}> <span className="material-icons fz-70">pause</span>
                                    <span className="lh-26">Software Development</span>
                                </h1></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles['ser-pro-right']}>
                        <div className={styles['ser-pro-right-title']}>
                                <h3>Products</h3>
                            </div>
                            <div className={styles['ser-pro-right-content']}>
                                
                                <div className={styles['geeks']}>
                                    <span className="material-icons fab fz-54">pause</span>
                                    <div className={styles['service-box-div']}>
                                        Hello
                                    </div>
                                </div>

                                <div className={styles['geeks']}>
                                    <span className="material-icons fab fz-54">pause</span>
                                    <div className={styles['service-box-div']}>
                                        Hello
                                    </div>
                                </div>

                                <div className={styles['geeks']}>
                                    <span className="material-icons fab fz-54">pause</span>
                                    <div className={styles['service-box-div']}>
                                        Hello
                                    </div>
                                </div>

                                <div className={styles['geeks']}>
                                    <span className="material-icons fab fz-54">pause</span>
                                    <div className={styles['service-box-div']}>
                                        Hello
                                    </div>
                                </div>

                                <div className={styles['geeks']}>
                                    <span className="material-icons fab fz-54">pause</span>
                                    <div className={styles['service-box-div']}>
                                        Hello
                                    </div>
                                </div>

                                <div className={styles['geeks']}>
                                    <span className="material-icons fab fz-54">pause</span>
                                    <div className={styles['service-box-div']}>
                                        Hello
                                    </div>
                                </div>

                               
{/* 
                                <div className={styles['service_box']}>
                                        <div className={styles['top']} id="test">
                                        </div>
                                        <div className={styles['bottom']}>
                                          <h3>Order Management System</h3>
                                        </div>
                                        <span className="material-icons fab fz-54">pause</span>
                                </div>
                                <div className={styles['service_box']}>
                                        <div className={styles['top']} id="test">
                                        </div>
                                        <div className={styles['bottom']}>
                                        <h3>Order Management System</h3>
                                        </div>
                                        <span className="material-icons fab fz-54">pause</span>
                                </div>

                                <div className={styles['service_box']}>
                                        <div className={styles['top']} id="test">
                                        </div>
                                        <div className={styles['bottom']}>
                                            <h3>Order Management System</h3>
                                        </div>
                                        <span className="material-icons fab fz-54">pause</span>
                                </div>

                                <div className={styles['service_box']}>
                                        <div className={styles['top']} id="test">
                                        </div>
                                        <div className={styles['bottom']}>
                                            <h3>Order Management System</h3>
                                        </div>
                                        <span className="material-icons fab fz-54">pause</span>
                                </div>

                                <div className={styles['service_box']}>
                                        <div className={styles['top']} id="test">
                                        </div>
                                        <div className={styles['bottom']}>
                                            <h3>Order Management System</h3>
                                        </div>
                                        <span className="material-icons fab fz-54">pause</span>
                                </div>

                                <div className={styles['service_box']}>
                                    <div className={styles['top']} id="test">
                                    </div>
                                    <div className={styles['bottom']}>
                                        <h3>Order Management System</h3>
                                    </div>
                                    <span className="material-icons fz-74">pause</span>
                                </div>
 */}
                            {/* </div>
                    
                        </div>
                            
                    </div> */}
            {/* </section>  */}

{/* /// ------------------------------------------------------------------------------------------------------ */}



            <section className="mt-30 mb-50">
                <h2 className="txt center pull none">Subscription Tiers</h2>
                <h4 className="txt center pull none">Choose the best one that fits your needs</h4>
                <div className="center-text pull none mt-20">
                    {/* <Switch></Switch> */}
                </div>
                <div className="subscriptions mt-50">
                    { subscriptions.map((feature, i) => <SubscriptionCard key={i} subscription={feature}/>) }
                </div>
            </section>

            {/* <section className="banner home">
                {/* <Carousel autoplay> */}
                    {/* <div>
                        <div className={styles['contentStyle']}>Hello Hello</div>
                        <div className={styles['contentStyle']}>Hello</div>
                        <div className={styles['contentStyle']}>Hello</div>
                        <div className={styles['contentStyle']}>Hello</div>
                        <div className={styles['contentStyle']}>Hello</div>
                        <div className={styles['contentStyle']}>Hello</div>
                    </div> */}
                    
                {/* </Carousel> */}
            {/* </section> */} 

            

            <section className="p-35">
              <div className={styles['have-a-product']}>
                  <div className={styles['hap-text-container']}>
                      <h1>Have a product or service to sell?</h1>
                      <span className="mb-24">Reach to 1000’s of buyers at once</span>
                      <Button>Get Started Now</Button>
                  </div>

                  <div style={{height : "282px", width : "100%", position : "relative"}}>
                      <Image layout="fill" src="/have-a-product.png" alt="" />
                  </div>
              </div>
            </section>
        </PublicLayout>
    )
}