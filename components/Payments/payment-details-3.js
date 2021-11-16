import {Form, Select, Input, Slider, Divider, Button, Checkbox} from 'antd';
// import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Option } from 'antd/lib/mentions';
import React from 'react';
import styles from '../../styles/components/Payment-Details-3.module.scss'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const PaymentDetails3 = () =>{
    
    return(
        <div>
            <span><span className="material-icons">arrow_back_ios</span>Go Back</span>
            <div className={styles['wallet-deposit-container']}>
                <div className="card card2 p-0" style={{height : "fit-content", position : "relative"}}>
                    <div className={styles['card-header-container']}>
                        <h5 className="mt-22 pb-21 pl-27 pr-27">Banking Info
                           <div>
                                <span className="primary-txt mr-16 fz-16 txt weight400">INTERNATIONAL</span>
                                <span className="material-icons fz-47" style={{color:"var(--primary-1)"}}>check_circle</span>
                           </div>
                        </h5>
                    </div>
                    <div className="pr-32 pl-32">
                        <h3><strong className="primary-txt fz-17">Beneficiary Bank Details</strong></h3>
                    </div>
                    <div className={styles['anpa-container-content']}>
           
                        <div>
                            <strong>Bank Name</strong>
                            <span>Halais</span>
                        </div>
                
                
                        <div>
                            <strong>SWIFT/BIC Code</strong>
                            <span>SA 12-1234-1234-1234-1234-1234</span>
                        </div>
                
                
                        <div>
                            <strong>SWIFT/BIC Code</strong>
                            <span>000000608010167519</span>
                        </div>
                
                
                        <div>
                            <strong>Beneficiary Bank Address Line 1</strong>
                            <span>Beneficiary Bank Address Line 1</span>
                        </div>
                    
                        <div>
                            <strong>Beneficiary Bank Address Line 2</strong>
                            <span>Beneficiary Address line 2</span>
                        </div>
                
                
                        <div>
                            <strong>Beneficiary Bank Address Line 3</strong>
                            <span>Beneficiary Bank Address Line 3</span>
                        </div>
                
                
                        <div>
                            <strong>Country</strong>
                            <span>United States</span>
                        </div>
                
                
                        <div>
                            <strong>City</strong>
                            <span>NY</span>
                        </div>
                    </div>
                    <div className="pr-32 pl-32">
                        <h3><strong className="primary-txt fz-17">Beneficiary Details</strong></h3>
                    </div>
                    <div className={styles['anpa-container-content']}>
           
                        <div>
                            <strong>Beneficiary First Name</strong>
                            <span>Halais</span>
                        </div>
                
                
                        <div>
                            <strong>Beneficiary Middle Name</strong>
                            <span>SA 12-1234-1234-1234-1234-1234</span>
                        </div>
                
                
                        <div>
                            <strong>Beneficiary Last Name</strong>
                            <span>000000608010167519</span>
                        </div>
                
                
                        <div>
                            <strong>Beneficiary Address Line 1</strong>
                            <span>Beneficiary Bank Address Line 1</span>
                        </div>
                    
                        <div>
                            <strong>Beneficiary Address Line 2</strong>
                            <span>Beneficiary Address line 2</span>
                        </div>
                
                
                        <div>
                            <strong>Beneficiary Bank Address Line 3</strong>
                            <span>Beneficiary Bank Address Line 3</span>
                        </div>
                
                
                        <div>
                            <strong>Country</strong>
                            <span>United States</span>
                        </div>
                
                
                        <div>
                            <strong>City</strong>
                            <span>NY</span>
                        </div>
 
                        <div>
                            <strong>Mobile Number</strong>
                            <span>505552908</span>
                        </div>
                
                    </div>

                    <Divider className="mt-27 mb-17"></Divider>
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
                                <Button className="primary">Add New Payment Method</Button>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
  
  )
}

export default PaymentDetails3;