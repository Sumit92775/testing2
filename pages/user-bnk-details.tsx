import React from 'react';
import {Form, Select, Input, Slider, Divider, Button, Checkbox, Image} from 'antd';
// import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
// import images from 'react-payment-inputs/images';
// import { css } from 'styled-components';
import styles from '../styles/components/Payments-Wallet-Deposit.module.scss'
const UserBnkDetails = (props : any) =>{
    
    function onChange(e:any) {
        console.log(`checked = ${e.target.checked}`);
    }


    // const {
    //     wrapperProps,
    //     getCardImageProps,
    //     getCardNumberProps,
    //     getExpiryDateProps,
    //     getCVCProps
    //   } = usePaymentInputs();

    
    
    return(
        <div>  
            {props.productDetails === true ? 
            <div style={{display : "grid", gridTemplateColumns : "1fr 1fr 1fr !important"}}>
                 <h5 className={styles['h5-checkbox']}><Checkbox onChange={onChange} className="mt-20"><h5>Debit/Credit Card</h5></Checkbox></h5>
                 {/* <div className="flex center-content">
                    <Image style={{objectFit :"cover"}} src="./discover.png"></Image>
                    <Image src="./mastercard.png"></Image>
                    <Image src="./visa.png"></Image>
                 </div> */}
                 <div className="flex center-content" style={{justifyContent : "flex-end"}}>
                 <h5 className={styles['h5-checkbox']}><Checkbox onChange={onChange} className="mt-20"><h5>Pay at Venue</h5></Checkbox></h5>
                 </div>
            </div>
            : 
            <Checkbox onChange={onChange} className="mt-20"><span><strong>Debit/Credit Card</strong></span></Checkbox>
            }
             <Form>
                <Form.Item label="Card Number" className="mt-30">
                    {/* <PaymentInputsWrapper {...wrapperProps} styles={{inputWrapper : {base : css`height : fit-content;border-radius : 6px;border: var(--border-2) !important;`},fieldWrapper: { base: css`height: 33px;`},input: { base: css`height: ${props.productDetails === true ? "43px" : "33px"};border: none;border : none !important;box-shadow : none !important;width : 80%`, cardNumber : css`width : 90%`}}}>
                        <input {...getCardNumberProps()} />
                        <svg {...getCardImageProps({ images })} fontSize="23px"/>
                    </PaymentInputsWrapper> */}
                </Form.Item>

                <Form.Item label="Card Holder" className="mt-43">
                    <Input style={{height : "55px !important"}}></Input>
                </Form.Item>
                {/* <Form.Item>
                    <Button></Button>
                </Form.Item> */}
                <Form.Item className="mt-27">
                    <div className={styles['expiry-cvv-container']}>
                        <Form.Item label="Expiry">
                            {/* <PaymentInputsWrapper {...wrapperProps} styles={{inputWrapper : {base : css`height : fit-content !important;border-radius : 6px;border: var(--border-2) !important;`},fieldWrapper: { base: css`height: 33px !important;`},input: { base: css`height: ${props.productDetails === true ? "43px" : "33px"} !important;border: none;border : none !important;box-shadow : none !important;width : 80%`, cardNumber : css`width : 90%`}}}>
                                <input {...getExpiryDateProps()} />
                            </PaymentInputsWrapper> */}
                        </Form.Item>

                        <Form.Item label="CVV">
                            {/* <PaymentInputsWrapper {...wrapperProps} styles={{inputWrapper : {base : css`height : fit-content;border-radius : 6px;border: var(--border-2) !important;`},fieldWrapper: { base: css`height: 33px;`},input: { base: css`height: ${props.productDetails === true ? "43px" : "33px"};border: none;border : none !important;box-shadow : none !important;width : 80%`, cardNumber : css`width : 90%;`}}}>
                                <input {...getCVCProps()} />
                            </PaymentInputsWrapper> */}
                        </Form.Item>
                    </div>

                </Form.Item>


                {props.productDetails === true ? 
                    <Form.Item>
                        <div className={styles['product-details-btm-btn-container']}>
                            <Checkbox className="mr-30">Save Card For Future Transactions</Checkbox>
                            <Button className="primary">Save Card</Button>
                        </div>
                    </Form.Item>
                : 
                    
                    <Form.Item>
                        <div className={styles['btm-btn-container']}>
                            <Button className="mr-30">Cancel</Button>
                            <Button className="primary">Save New Payment Method</Button>
                        </div>
                    </Form.Item>
                }



            </Form>                   
        </div>
    )
}

export default UserBnkDetails