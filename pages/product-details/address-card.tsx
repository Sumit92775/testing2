import { Button, Modal, Form } from 'antd';
import React, { useState } from 'react';
import AddAddress from './add-address-modal';
import AddressByMap from './address-by-map';
import cx from 'classnames';
import styles from './Styles.module.scss'

const DefaultAddress = (props : any) =>{

    const [chooseModal, setchooseModal] = useState(false);
    const [chooseModalName, setchooseModalName] = useState("");
    const [footer, setFooter] = useState(false);


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
    
        console.log(type);
    };
    

    return(
        <div className="mt-54 mb-10 grid-view grid-2" style={{width : "300px"}}>
            <div className="card card2 pl-10 pt-10 pr-10 pb-10" style={{width: "300px"}}>
                <div className="grid-view grid-1 rowgap-5">
                    <div className="grid-view auto-width grid-1 mb-5">
                        <h5>Default Address</h5>
                    </div>
                    <div className="grid-view auto-width grid-2">
                        <span className="txt dark1 weight400">Name </span>
                        <span className="txt weight700 float right ">Jonathan</span>
                    </div>
                    <div className="grid-view auto-width grid-2">
                        <span>Email</span>
                        <span className="txt weight700 float right">Jonathan@gmail.com</span>
                    </div>
                    <div className="grid-view auto-width grid-2">
                        <span>Mobile</span>
                        <span className="txt weight700 float right">00966 4 8490159</span>
                    </div>
                    <div className="grid-view auto-width grid-2">
                        <span>Address </span>
                        <span className="txt weight700 float right">Awali,ah,Al Madinah Al Munawar</span>
                    </div>

                </div>
            </div>
            {props?.type === "list" ? 
           <>
           </> 
            : 
            <Button style={{height : "60px", width : "fit-content"}} className="full-width center-content mr-0 ml-30 mt-80" onClick={openModal}><span className="material-icons mr-5">add_circle_outline</span>Add Another Address</Button>
           
            }
            <div className={ cx('ant-modal-body',styles['modal']) }>
                <Modal style={{borderRadius :"15px", overflow : "hidden"}} title={
                                <div style={{width : "100%", 
                                height: "100%",
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                alignItems: "center"}}>
                                    <h4 className="txt primary">Change {chooseModalName}</h4>
                                </div>
                        } footer={
                            // <div className="pt-20 pb-20 pr-0">
                            //     <Button className="mr-20" >Cancel</Button>
                            //     <Button className="ant-btn primary mr-21">Save Chages</Button>
                            // </div>
                            ""    
                        } 
                        visible={chooseModal} onOk={handleOk} onCancel={handleCancel}>
                            {
                                chooseModalName === "mark-on-map" ? 
                                <AddAddress></AddAddress>
                                : 
                                <AddressByMap></AddressByMap> 

                            }
                        </Modal>
            </div>
        </div>

   )
}

export default DefaultAddress;