import {Form, Select, Input, Slider, Divider, Button, Checkbox} from 'antd';
// import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Option } from 'antd/lib/mentions';
import React, { useState } from 'react';
import styles from '../../styles/components/Payments-Wallet-Deposit.module.scss'
// import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
// import images from 'react-payment-inputs/images';
// import { css } from 'styled-components';
import UserBnkDetails from './user-bnk-details';
import cx from 'classnames';
import { getCustomerId } from '../../services/payments';
import {wpwlOptions} from './test';
import router from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const PaymentWalletDeposit = (props) =>{

    const [addMoneyClicked, setAddMoneyClicked] = useState(false);
    const [checkoutId, setCheckoutId] = useState('');
    // const [form, setForm] = useState('');

    const [currenyType, setCurrenyType] = useState('');
    const [amount, setAmount] = useState(0);

    const [amountSetted, setAmountSetted] = useState("false");
    const [currencySetted, setCurrenySetted] = useState("false");
    const [confirmBtnDisable, setConfirmBtnDisable] = useState("true")

    const { t } = useTranslation('validator');
    const [form] = Form.useForm();

    // const [cardNumber, setCardNumber] = useState(0);
    // const [cardHolderName, setCardHolderName] = useState('');
    // const [cardCvv, setCardCVV] = useState(0);
    // const [cardExpiry, setCardExpiry] = useState('');

    // Select Input
    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setCurrenyType(value);
        setCurrenySetted("true")
    }

    const validList = [{value : "SAR"}];

    // Slider Input
    const style = {
        display: 'inline-block',
        height: 'fit-content',
        width : '98.6%',
      };
      
    const marks = {
    0: '0',
    20: '250',
    40: '500',
    60: {
        label: 1000,
    },
    80: '1500',
        100: {
            style : {
            transform: 'translateX(-92%)',
            },
            label : 2000,
        } ,
    };
    
    const checkAmount = (rule, value, callback) => {
        if(value) {
            let len = value.trim().length// 
            if(len >= 1){
                let ch = value.charAt(0);
                if(len === 1 && ch !== ' '){
                    let num = parseInt(ch);
                    if(num == 0){
                        callback(t('invalid amount', {field: 'amount'}));
                    }else if(num > 0){
                        setAmount(value.trim());
                        if(currencySetted === "true"){
                            setConfirmBtnDisable("false");
                            callback();
                        }else{
                            callback(t('Select currency', {field: 'amount'}));
                        }
                    }
                }else{
                    console.log("ch: ",ch);
                    if(ch === ' '){
                        callback(t('invalid amount', {field: 'amount'}));
                    }else if(value <= 300){
                            setAmount(value.trim()); 
                            if(currencySetted === "true"){
                                setConfirmBtnDisable("false");
                                callback();
                            }else{
                                callback(t('Select currency', {field: 'amount'}));
                            }
                    }else{
                        callback(t('Amount must be less than equals to 300', {field: 'amount'}));
                    }
                }
            }else{
                callback(t('invalid amount', {field: 'amount'}));
            }
        } else {
            callback()
        }
    };

    const renderPaymentform = () => {
        try{
            getCustomerId({
                currency: currenyType,
                amount: amount
            }).then(res =>{
                if(res.status){
                    console.log("Response Payment: ",res);
                    setCheckoutId(res.checkOutId);

                    // localStorage.setItem('checkoutId', res.checkOutId);
                    //   setAddMoneyClicked(true);
                     
                    console.log('Loading ')
                    let data = document.querySelector('.payment');


                  const newScript = document.createElement("script");
                  let inlineScript = document.createTextNode(` var wpwlOptions = {
                    onSaveTransactionData: function(data){console.log(data);},
                    onReady: function() {
                      var createRegistrationHtml = '<div class="customLabel">Store payment details?</div><div class="customInput"><input type="checkbox" name="createRegistration" value="true"/></div>';
                      $('form.wpwl-form-card').find('.wpwl-button').before(createRegistrationHtml);
                    }
                  }
                  `);
              
                newScript.async = true;
                newScript.appendChild(inlineScript);
             

                const script = document.createElement("script");
                script.src = `https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${res.checkOutId}`;
                script.async = true;
                  

                const qry = document.createElement("script");
                qry.src = "https://code.jquery.com/jquery.js";
                qry.setAttribute('type', 'text/javascript');

                const form = document.createElement("form");
                //   form.action = "http://localhost:3000/paymentResult";
                form.action = `${process.env.base_url}paymentResult`

                  form.setAttribute("class", "paymentWidgets design");
                  form.setAttribute("data-brands", "VISA MASTER AMEX");
                  form.setAttribute("createRegistration", true);

                  data.appendChild(form);
                  data.appendChild(script);
                  data.appendChild(newScript);
                  data.appendChild(qry)
                //   data.appendChild(sc)

                //   setForm(form);
                  // document.body.appendChild(form);
                }else{
                  //   console.log("error: ",error);
                }
            }).catch(error =>{
                console.log("error: ",error);
            })
        }catch(error){
          console.log("error: ",error);
        }
    }

    return(
        <div className={cx(styles['payment'], 'payment')}>
            <div className={styles['wallet-deposit-container']}>

                {addMoneyClicked === true ? 
                <div className="">
                </div>
                // <div>
                //     <span className={cx(style['cursor'], 'txt primary cursor mb-10')} onClick={() => setAddMoneyClicked(false)}><span className="material-icons">arrow_back_ios</span>Go Back</span>
                //     <div className="card card2 p-0 mt-10" style={{height : "fit-content"}}>
                //         <h5 className="mt-22 pb-21 pl-27 pr-27" style={{borderBlockEnd : "var(--border-neutral-3)"}}>Payment Method</h5>
                //         <div className={styles['payment-card-detail-container']}>
                //             <div className={styles['card-details']}>
                //                 <div className={styles['top-container']}>
                //                     <div className={styles['top-container-top']}>
                //                         <span className="fz-11 lh-11">Account Holder</span>
                //                         <span><strong>Halais</strong></span>
                                        
                //                     </div>
                //                     <div className={styles['top-container-bottom']}>
                //                         <div className={styles['top-container-bottom-left']}>
                //                         <div className={styles['top-container-bottom-left-checkbox']}>
                //                             <Checkbox></Checkbox>
                //                         </div>

                //                         <div className={styles['top-containe-bottom-left-card-details']}>
                                        
                //                                 <Input></Input>
                //                                 <div className={styles['cvp-container']}>
                //                                     <span>Card Number</span>
                //                                     <span>Valid Thru</span>
                //                                     <span>Provider</span>
                //                                 </div>
                //                         </div>

                //                         </div>

                //                     </div>
                //                 </div>
                //                 <div className={styles['or-container']}>
                //                     <h5 className=""><strong>Or</strong></h5>
                //                 </div>

                //                 <h5 className="mt-30"><strong>Add New Payment Method</strong></h5>
                //                 <UserBnkDetails></UserBnkDetails>

                //             </div>
                //         </div>
                //     </div>
                // </div>
                : 
                <div>
                    <div className="mb-20" style={{height : 'fit-content'}}>
                        <div className="card card2 p-0 mb-10" style={{height : "fit-content", position : "relative"}}>
                            <h5 className="mt-22 pb-21 pl-27 pr-27" style={{borderBlockEnd : "var(--border-neutral-3)"}}>Deposit Money</h5>
                            <Form className="ml-36 mr-36"
                            form={form}
                            >
                                <Form.Item className="mt-19" label="Currency" required={true}>
                                    <Select className="h43" defaultValue={"UTC"} onChange={handleChange}>
                                        {validList.map((obj)=>{
                                            return <Option key={`${obj.value}`} value={`${obj.value}`}>{obj.value}</Option>
                                        })}
                                    </Select>
                                </Form.Item>

                                <Form.Item className="mt-18" label="Amount" name={['amount']} hasFeedback validateTrigger={['onBlur']} rules={[
                                { required: true, message: t('required', {field: 'Amount'}) },
                                { validator: checkAmount },
                                ]}>
                                    <Input className="ht43" value={amount} placeholder="Basic usage" style={{height : "45px"}} onChange={(event) => {
                                        setAmount(event.target.value);
                                        setAmountSetted("true");
                                        }}/>
                                </Form.Item>
                                
                                <Form.Item className="mt-43">
                                    <div style={style}>
                                        <Slider dots={false} range marks={marks}/>
                                    </div>
                                </Form.Item>
                            
                                <Form.Item className="mt-15">
                                    <Divider></Divider>
                                </Form.Item>
                                
                                <Form.Item>
                                    <div className={styles['total-price']}>
                                        <h5><strong>Total</strong></h5>
                                        <h5><strong>$500.00</strong></h5>
                                    </div>
                                </Form.Item>

                                <Form.Item className="mt-26 mb-36">
                                    <Button className="primary full-width" disabled={confirmBtnDisable === "true" ? true : false} onClick={() => {
                                        // handleAddMoney();
                                        setAddMoneyClicked(true);
                                        renderPaymentform();
                                        }}>Confirm &amp; Deposit $ {amount}</Button>
                                </Form.Item>

                            </Form>

                        </div>  
                        <span className={styles['tac']}>By confirming deposit you agree to the terms and conditions of saloon plus</span>
                    </div>
                </div>
                }

            </div>
        </div>
  
  )
}

export default PaymentWalletDeposit;