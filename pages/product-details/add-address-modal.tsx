import { Button, Carousel, Checkbox, Divider, Input, Modal } from 'antd';
import React, { createRef, useState } from 'react';
import {Form} from 'antd';
import DefaultAddress from './address-card';
import styles from '../../styles/components/Product-Details.module.scss'
import AddressByMap from './address-by-map';

const AddAddress = (props : any) =>{

    const addressFields = [{Name : "Jonathan",Email : "Jonathan@gmail.com", Mobile : "00966 4 8490159", Address : "Awali,ah, Al Madinah Al Munawar"}];
    const [chooseModal, setchooseModal] = useState(false);
    const [chooseModalName, setchooseModalName] = useState("");
    const [footer, setFooter] = useState(true);

    const [name, setName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [streetNumber, setStreetNumber] = useState("");
    const [add1, setAdd1] = useState("");
    const [add2, setAdd2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    const [lat, setLatitude] = useState("");
    const [long, setLongitude] = useState("");

    const handleOk = (evt : any) => {
        console.log('ok clicked', evt)
    };
    
    const handleCancel = () => {
        setchooseModal(false);  
    };
    
    const openModal = (type : any) => {
    
        setchooseModal(true);
    
        // setchooseModalName(type)
        if(type === "Email"){
            setchooseModalName(type);
        }else if(type === "Mobile Number"){
            setchooseModalName(type)
        }else if(type === "General details"){
            setchooseModalName(type);
            setFooter(true);
        }
        else if(type === "mark-on-map"){
            setchooseModalName(type);
        }
    
        console.log(type);
        
        // console.log(type);
        // setChangePassword(true);
    };

    let addressArray = [{}, {}, {}, {}, {}, {}];

    return(
        <div className="container" style={{height : "fit-content"}}>
        <div className={styles['add-address-modal-top-container']}>
            
            {addressArray.map((addressObj) =>{
                return(
                    <div key={`${addressObj}`}>
                        <DefaultAddress type={"list"}></DefaultAddress>
                    </div>
                )
            })}
            
        </div>
        <div className="bottom-container">
            <div className="flex center-content">
                <Divider type="horizontal" style={{minWidth : "100% !important"}}></Divider>
                <h4 className="txt dark3 ml-10 mr-10">Or</h4>
                <Divider type="horizontal" style={{minWidth : "100% !important"}}></Divider>
            </div>
            <Form className="mt-70">
                <div className={styles['form-container']}>
                    <Form.Item label="Name" required>
                        <Input value={name} contentEditable="true" placeholder="Name" onChange={(event) => setName(event.target.value)}></Input>
                    </Form.Item>
                    
                    <Form.Item label="Email">
                        <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}></Input>
                    </Form.Item>
                </div>
                <div className={styles['form-container']}>
                    <Form.Item label="Mobile Number" required>
                        <Input placeholder="Mobile Number" value={mobileNumber} onChange={(event) => setMobileNumber(event.target.value)}></Input>
                    </Form.Item>
                    
                    <Form.Item label={<div></div>}>
                        <Button onClick={() =>{
                            if(name.length > 1 && mobileNumber.length == 10){
                                openModal("mark-on-map");
                            }else{
                                alert('Name and Mobile Number is mandatory');
                            }

                            }}>Select Address</Button>
                    </Form.Item>
                </div>
            </Form>
            
            <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                            <div style={{width : "100%", 
                            height: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            alignItems: "center"}}>
                                <h4 className="txt primary">Change {chooseModalName}</h4>
                            </div>
                    } footer={
                        <div className="pt-20 pb-20 pr-0">
                            <Button className="mr-20" onClick={handleCancel}>Cancel</Button>
                            <Button className="ant-btn primary mr-21" onClick={() => {
                                props?.addAddress({
                                    name : name,
                                    mobileNumber : mobileNumber,
                                    email : email,
                                    add1 : add1,
                                    add2 : add2,
                                    city : city,
                                    country : country,
                                    houseNumber : houseNumber,
                                    state : state.length,
                                    lat : lat,
                                    long : long,
                                    pincode : pincode,
                                    streetNumber : streetNumber,
                                    isDefault : 0,
                                });
                                handleCancel();
                                props?.closeModal();
                                }}>Save Chages</Button>
                        </div>} 
                    visible={chooseModal} onOk={handleOk} onCancel={handleCancel}>
                        {
                            chooseModalName === "mark-on-map" ? 
                            <AddressByMap address={setAddress} houseNumber={setHouseNumber} state={setState} streetNumber={setStreetNumber} add1={setAdd1} add2={setAdd2} city={setCity} country={setCountry} pincode={setPincode} lat={setLatitude} long={setLongitude} addAddress={props?.addAddress}></AddressByMap> 
                            : 
                            <AddAddress></AddAddress>

                        }
                    </Modal>
        </div>
    </div>
    )
}

export default AddAddress;
