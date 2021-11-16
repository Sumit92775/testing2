import Image from 'next/image';
import ProductCard from '../components/Common/ProductCard';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button, Input, Select } from 'antd';
import PublicLayout from '../components/Public/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { addProvider } from '../actions/sponsoredProviders'
import astyles from '../styles/components/ContactUs.module.scss';
import {Form} from 'antd';
import { Option } from 'antd/lib/mentions';
import { getCartStatus } from '../services/header';
import { useEffect, useState } from 'react';
import { getNotifications } from '../services/notification';

const { TextArea } = Input;

export default function Home() {

  const handleChange = (value: any) =>{
    console.log(`selected ${value}`);
  }
  
const quantityList = [{value : 1},{value : 2}]; 
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

    <div className={astyles['container']}>
      <PublicLayout data={{cartCount: cartItemCount, notificationCount: notificationCount}}>
          <section className="banner home" id="test">
            <Image className="ht-100" layout="fill" src="/slider 1.jpg" alt="" />
            <div className={astyles['about-us-text-container']}>
              <h1 className={astyles['about-us-text']}>Contact us</h1>
            </div>
          </section>
          
          <section className="banner" style={{height : "fit-content", backgroundColor : "white"}}>
            <div className={astyles['contact-us-container']}>
              <div className={astyles['left-container']}>
              <div className={astyles['right-container']}>
                <div className={astyles['main-form']}>
                    <Form>
                      <Form.Item>
                        <div className="mb-30" style={{display : 'flex',alignItems : 'center', justifyContent : "space-evenly"}}>
                          <h2 style={{width : "fit-content"}}>Feel free to talk, We&rsquo;ll Listen</h2>
                        </div>
                      </Form.Item>

                      <Form.Item>
                        <div className={astyles['nt-container']}>
                          <Form.Item label="Name">
                            <Input></Input>
                          </Form.Item>

                          <Form.Item label="Telephone" style={{color : "white"}}>
                            <Input></Input>
                          </Form.Item>
                        </div>
                      </Form.Item>


                      <Form.Item label="Email Address">
                        <Input className="mb-10"></Input>
                      </Form.Item>
                    
                      <Form.Item label="Subject">
                        <Select className="mb-10" onChange={handleChange}>
                              {quantityList.map((obj)=>{
                                      return <Option key={`${obj.value}`} value={`${obj.value}`} >{obj.value}</Option>
                                  })}
                              </Select>
                      </Form.Item>

                      <Form.Item className="msg mb-15" label="Message">
                        <TextArea rows={4}></TextArea>
                      </Form.Item>

                      <Form.Item>
                        <div style={{display : "flex", alignItems : "center", justifyContent : "space-evenly"}}>
                          <Button className="ant-btn primary">Send Message</Button>
                        </div>
                      </Form.Item>
                    </Form>

                </div>
              </div>
              </div>
              
            </div>
          </section>
      </PublicLayout>
      </div>
  )
}