import React, { useEffect, useState } from "react";
import { GoogleMap, InfoBox, InfoWindow, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import { Button, Input, Form, Checkbox, message, Modal, Rate, Divider } from 'antd';
import Geocode from 'react-geocode';
import useTranslation from "next-translate/useTranslation";
import PopUpOnMap from './PopUpOnMap'
import styles from './ProductCard.module.scss'
Geocode.setApiKey("AIzaSyBKowFDX0jDn687et4wgSmFpXiK-bj5Gj4");
import cx from 'classnames';
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.enableDebug();
import Image from 'next/image';

const MapViewUser = (props) =>{

    const [latitude, setLatitude] = useState(28.701013012272828);
    const [longitude, setLongitude] = useState(77.30239085333835);
    const [chooseModal, setChooseModal] = useState(false)
    const [array, setArray] = useState([])
    const { t } = useTranslation('validator');

    const [popuplat, setPopupLat]  = useState(0);
    const [popuplng, setPopupLng]  = useState(0);

    useEffect(() =>{
        setArray(props?.storeLatLong)
    },[props?.storeLatLong])

    const containerStyle = {
        width: '100%',
        height: '400px',
        borderRadius: '16px'
      };

      const center = {
        lat: latitude,
        lng: longitude
      };
      
      const mapStyles = {
          width: "100%",
          height: "100%",
        };
          
        let storeOnMap = [
            {id: 1, lat: 28.701013012272828, lng: 77.30239085333835, shelter:'marker 1'},
            {id: 2, lat: 28.957013012272828, lng: 77.33239085333835, shelter:'marker 2'},
            {id: 3, lat: 28.639013012272828, lng: 77.39239085333835, shelter:'marker 3'},
          
      ]

      const handleCancel = () =>{
          setChooseModal(false);
      }


    const onLoad = infoWindow => {
        console.log('infoWindow: ', infoWindow)
    }
    
    const position = { lat: 33.772, lng: -117.214 }
    const divStyle1 = {
        width: '100%',
        background: 'red'
    }

    

    return(

        <div style={{borderRadius : "30px"}}>
                <div className="mb-20" style={{position : "relative"}}>
                <LoadScript
                    googleMapsApiKey="AIzaSyBKowFDX0jDn687et4wgSmFpXiK-bj5Gj4"
                >
                <GoogleMap
                    mapContainerStyle = {containerStyle}
                    center = {center}
                    zoom = {10}
                    options = {{
                    fullscreenControl: false,
                    disableDefaultUI :  true,
                    styles: mapStyles
                    }}>


                    {array.map((obj) =>{
                        return(
                            <Marker key={obj}
                            position={{lat: parseFloat(obj.lat), lng : parseFloat(obj.lng)}}
                            icon={{
                                url: '/store-on-map.png',
                            }}
                            label={''}
                            onClick={() => {setChooseModal(true);
                            setPopupLat( parseFloat(obj.lat));
                            setPopupLng( parseFloat(obj.lng));
                        }}
                            />
                        )
                    })}

                    {chooseModal ? 
                    <div className={styles['popup']}>
                        <InfoWindow
                            onLoad={onLoad}
                            position={{ lat: popuplat, lng: popuplng }}
                            options={{
                                styles: divStyle1
                            }}
                            onCloseClick={() => setChooseModal(false)}
                            >
                            <div className={styles['popup-container']}>
                                <div className={styles['tc']}>
                                    <div className={styles['img-container']}>
                                        <Image height={80} width={30} src="/product (2).png" alt=""></Image>
                                    </div>
                                    <div className={cx(styles['tlc'], 'flex ml-20')}>
                                        <h5>1.Halais </h5>
                                        <h6>Jeddah Nazlah Dist, 20512</h6>
                                        <Rate allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                                <div className="bc mt-10" >
                                    <Form>
                                        <Form.Item>
                                            <div className="grid-view grid-2">
                                            <Form.Item label="Starting From">
                                                    <div className="grid-view grid-3">
                                                        <span>Fine Dining</span>
                                                        <span>Casual Dining</span>
                                                        {/* <span>Casual Dining</span> */}
                                                        {/* <span>Casual Dining</span>
                                                        <span>Casual Dining</span>
                                                        <span>Casual Dining</span> */}
                                                    </div>
                                            </Form.Item>

                                            <Form.Item label="Starting From">
                                                    {/* <div> */}
                                                        <span className="pull">$49.00</span>
                                                    {/* </div> */}
                                            </Form.Item>
                                            
                                            
                                            </div>
                                        </Form.Item>
                                    </Form>
                                </div>
                                {/* <h1>InfoWindow</h1> */}
                            </div>
                            </InfoWindow>

                    </div>

                    :
                    <>
                    </>
                    }


                </GoogleMap>
                </LoadScript>
        </div>
        </div>
    )
}

export default MapViewUser;