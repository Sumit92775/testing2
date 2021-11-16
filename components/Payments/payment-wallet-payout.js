import React from 'react';
import {Form, Select, Input, Slider, Divider, Button, Checkbox} from 'antd';
// import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Option } from 'antd/lib/mentions';
import styles from '../../styles/components/Payment-Wallet-Payout.module.scss';

const PaymentWalletPayout = () =>{

    // Select Input
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const validList = [{value : 1},{value : 2}];
    
    return(
        <div>
            <span><span className="material-icons">arrow_back_ios</span>Go Back</span>
            <div className={styles['wallet-deposit-container']}>
               <div className="mb-20" style={{height : 'fit-content'}}>
                    <div className="card card2 p-0 mb-20" style={{height : "fit-content", position : "relative"}}>
                        <h5 className="mt-22 pb-21 pl-27 pr-27" style={{borderBlockEnd : "var(--border-neutral-3)"}}>Request Payout</h5>
                        <Form className="ml-36 mr-36">

                            <Form.Item className="mt-29 mt-30">
                                <div style={{display : 'flex', alignItems : 'center', columnGap : '14px'}}>
                                    <strong>Available to Payout</strong>
                                    <span className="primary-txt"> $800.00</span>
                                    <span className="primary-txt">SAR 560.00</span>
                                </div>
                            </Form.Item>

                            <Form.Item className="mt-20" label="Currency">
                                <Select className="h43" onChange={handleChange}>
                                    {validList.map((obj)=>{
                                        return <Option key={`${obj.value}`} value={`${obj.value}`}>{obj.value}</Option>
                                    })}
                                </Select>
                            </Form.Item>

                            <Form.Item className="mt-18" label="Payout Amount">
                                <Input className="ht43" placeholder="Basic usage" style={{height : "45px"}}/>
                            </Form.Item>

                            <Form.Item className="mt-15 mb-34">
                                <div style={{display : 'flex',justifyContent : "space-between", alignItems : 'center', columnGap : '14px'}}>
                                    <p><strong>Payout Fee </strong><span>$72.00</span></p>
                                    <p><strong>Remaining Balance in wallet </strong><span>$8.00</span></p>
                                </div>
                            </Form.Item>
                        </Form>


                    </div>
                    
                    <div className="flex full-width" style={{justifyContent : 'space-evenly', alignItems : 'center'}}>
                        <span>Please allow <strong>7-14 working days</strong> to receive your payout.</span>
                    </div>
               </div>
                <div className={styles['select-bank']}>
                    <div className="card card2 p-0" style={{height : "fit-content"}}>
                        <h5 className="mt-22 pb-21 pl-27 pr-27" style={{borderBlockEnd : "var(--border-neutral-3)"}}>Select Bank Account To Receive Payout</h5>
                        <div className="pl-32 pr-32 pt-16">
                            <div className={styles['bnk-dtl']}>
                                <div className={styles['bnk-dtl-container']}>    
                                    <div className={styles['bnk-dtl-container-left']}>
                                        <div className={styles['bnk-dtl-container-left-align']}>
                                            <Checkbox></Checkbox>
                                        </div>
                                    </div>
                                    <div className={styles['bnk-dtl-container-right']}>
                                        <div className={styles['bnk-dtl-container-right-details']}>
                                           <div>
                                               <span className="fz-11">Bank Name</span>
                                               <strong>Albilad</strong>
                                               <p><span className="mr-5">XXXX</span> <span className="mr-5">XXXX</span> <span className="mr-5">XXXX</span> <span className="mr-5">XXXX</span></p>
                                           </div>
                                           <div>
                                               <span className="fz-11">Beneficiary</span>
                                               <strong>Halais</strong>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-23 mb-50">
                                <span><strong className="primary-txt">Add New Bank Account</strong></span>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles['btn-container']}>
                        <Button className="mr-30">Cancel</Button>
                        <Button className="primary">Confirm &amp; Request Payout $ 720.00</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentWalletPayout;