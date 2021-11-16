import {Divider, Button} from 'antd';
// import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Option } from 'antd/lib/mentions';
import React, { useState } from 'react';
import styles from '../../styles/components/Payment-Details-4.module.scss'
// import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
// import images from 'react-payment-inputs/images';
// import { css } from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddPayoutMethod from './add-payout-method-modal';
import Modal from 'antd/lib/modal/Modal';

const PaymentDetails4 = () =>{

    const [selectedModalName, setSelectedModalName] = useState("");
    const [selectedModal, setSelectedModal] = useState(false);


const handleOk = (evt) => {
    console.log('ok clicked', evt)
};

const handleCancel = () => {
    setSelectedModal(false);   
};

const openModal = (type) => {

    console.log(type);
    setSelectedModal(true);
    
    switch(type){
        case "add payout methods" : setSelectedModalName("Add Payout Methods");
        break;
        
        case "notification_and_security" : setSelectedModalName("Notification And Security");
        break;
        
        case "booking_and_payments" : setSelectedModalName("Booking And Payments");
        break;

        case "Change Password" : setSelectedModalName("Change Password");
        break;
    }
};

    return(
        <div>
            <div className={styles['wallet-deposit-container']}>
                <div className="card card2 p-0" style={{height : "fit-content", position : "relative"}}>
                    <div className={styles['card-header-container']}>
                        <h5 className="mt-22 pb-21 pl-27 pr-27">Banking Info
                           <div>
                                <span className="material-icons fz-47" style={{color:"var(--primary-1)"}}>check_circle</span>
                           </div>
                        </h5>
                    </div>
                    <div className={styles['anpa-container-content']}>

                        
                        <div>
                            <strong>Bank Name</strong>
                            <span>Halais</span>
                        </div>
                
                
                        <div>
                            <strong>IBAN</strong>
                            <span>SA 12-1234-1234-1234-1234-1234</span>
                        </div>
                
                
                        <div>
                            <strong>Beneficiary First Name</strong>
                            <span>Nooh</span>
                        </div>
                
                
                        <div>
                            <strong>Beneficiary Middle Name</strong>
                            <span>Halais</span>
                        </div>
                    
                        <div>
                            <strong>Beneficiary Last Name</strong>
                            <span>Al Rajah</span>
                        </div>
                
                
                        <div>
                            <strong>Establishment/Company Name</strong>
                            <span>000000608010167519</span>
                        </div>
                
                
                        <div>
                            <strong>Commercial Registration Number (CRN)</strong>
                            <span>+966-585-5592-56</span>
                        </div>
                
                
                        <div>
                            <strong>Mobile Number</strong>
                            <span>+966-585-5592-56</span>
                        </div>
                
      
                    </div>
      
                    <Divider className="mt-0 mb-17"></Divider>
                    <div className={styles['bottom-btn-container']}>
                        <div>
                            <Button className="primary small mr-33" type="link"><span className="icon-wrap"><EditIcon /></span>Edit Details</Button>
                            <Button className="danger small" type="link"><span className="icon-wrap"><DeleteIcon /></span>Remove Gift Card</Button>
                        </div>
                        <div className={styles['float-to-right']}>
                           <span><span className="fz-11 mr-3">Next Billing Date</span><strong>12 Nov, 2020</strong></span>
                        </div>

                    </div>
                </div>
              
                {/* <div className={styles['payment-method-modal']}> */}
                    <div className="card card2" style={{height : "fit-content"}}>
                        <div className={styles['payment-card-detail-container']}>
                            <div className={styles['card-details']}>
                                <span className="material-icons fz-50">account_balance</span>
                                <h6>You can ad multiple banking acounts to withdraw your payouts.</h6>
                                <Button className="primary" onClick={()=>openModal("add payout methods")}>Add New Payment Method</Button>
                            </div>
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
                        <AddPayoutMethod></AddPayoutMethod>
                </Modal>

            </div>
        </div>
  
  )
}

export default PaymentDetails4;