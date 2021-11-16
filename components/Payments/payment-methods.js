import React from 'react';
import {Form, Select, Input, Slider, Divider, Button, Checkbox} from 'antd';
// import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Option } from 'antd/lib/mentions';
import styles from '../../styles/components/Payment-Methods.module.scss';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const PaymentMethods = () =>{

    // Select Input
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const validList = [{value : 1},{value : 2}];

    return(
        <div>
        <div className={styles['wallet-deposit-container']}>
            <div className="card card2 p-0" style={{height : "fit-content", position : "relative"}}>
                <div className={styles['card-header-container']}>
                    <h5 className="mt-22 pb-15 pl-27 pr-27">Banking Info
                       <div>
                            <span className="material-icons fz-47" style={{color:"var(--primary-1)"}}>check_circle</span>
                       </div>
                    </h5>
                </div>
                <div className={styles['anpa-container-content']}>
           
                <div>
                    <span>Card Holder Name</span>
                    <strong>Halais</strong>
                </div>
           
           
                <div>
                    <span>Card Holder Name</span>
                    <strong>Halais</strong>
                </div>
           
           
                <div>
                    <span>Card Holder Name</span>
                    <strong>Halais</strong>
                </div>
           
           
                <div>
                    <span>Card Holder Name</span>
                    <strong>Halais</strong>
                </div>
           
            </div>
                <Divider className="mt-25 mb-17"></Divider>
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
                            <p className="txt weight400">You can ad multiple banking acounts to withdraw your payouts.</p>
                            <Button className="primary">Add New Payment Method</Button>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    </div>

  )
}

export default PaymentMethods;