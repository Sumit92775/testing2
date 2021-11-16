import React from 'react';
import styles from '../../styles/components/Payment-Methods-2.module.scss'
import { Form, Checkbox, Input, Button } from 'antd';

const AddNewPayoutAccount = () =>{
    return(

        <div className="card card2 p-0 mb-20 mt-10">
            <h5 className="mt-22 pb-21 pl-27 pr-27" style={{borderBlockEnd : "var(--border-neutral-3)"}}>Add New Payout Account</h5>
            <div className={styles['anpa-container-content']}>
                <Form>
                    <Form.Item>
                        <Checkbox className="mr-70"><strong>Debit/Credit Card</strong></Checkbox>
                    </Form.Item>
                    
                    <Form.Item>
                        <div className={styles['inside-form']}>
                            <Form.Item className="mt-20" label="Card Number">
                                {/* <PaymentInputsWrapper {...wrapperProps} styles={{inputWrapper : {base : css`height : 43px !important;border-radius : 6px;border: var(--border-2) !important;`},fieldWrapper: { base: css`height: 33px !important;padding-bottom : 10px !important`},input: { base: css`height: 30px !important;border: none;border : none !important;box-shadow : none !important;width : 80%`, cardNumber : css`width : 90%`}}}>
                                    <input {...getCardNumberProps()} />
                                    <svg {...getCardImageProps({ images })} />
                                </PaymentInputsWrapper> */}
                                <Input className="ht-43" placeholder="Card Number"></Input>
                            </Form.Item>
                            <Form.Item className="mt-40" label="Cardholder Name">
                                <Input placeholder="Halais Restaurant" style={{height : "43px"}}></Input>
                            </Form.Item>
                            <Form.Item className="mt-27">
                                <div className={styles['expiry-cvv-container']}>
                                    <Form.Item label="Expiry">
                                        {/* <PaymentInputsWrapper {...wrapperProps} styles={{inputWrapper : {base : css`height : fit-content !important;border-radius : 6px;border: var(--border-2) !important;`},fieldWrapper: { base: css`height: 33px !important;`},input: { base: css`height: 33px !important;border: none;border : none !important;box-shadow : none !important;width : 90%`, cardNumber : css`width : 90%`}}}>
                                            <input {...getExpiryDateProps()} />
                                        </PaymentInputsWrapper> */}
                                        <Input className="ht-43" placeholder="MM/YY"></Input>
                                    </Form.Item>

                                    <Form.Item label="CVV">
                                        {/* <PaymentInputsWrapper {...wrapperProps} styles={{inputWrapper : {base : css`height : fit-content;border-radius : 6px;border: var(--border-2) !important;`},fieldWrapper: { base: css`height: 33px;`},input: { base: css`height: 33px;border: none;border : none !important;box-shadow : none !important;width : 100%`, cardExpiry : css`width : 100%`}}}>
                                            <input {...getCVCProps()} />
                                        </PaymentInputsWrapper> */}
                                        <Input className="ht-43" placeholder="CVV"></Input>
                                    </Form.Item>
                                </div>
                            </Form.Item>
                        </div>
                    </Form.Item>
                </Form>

                <div className={styles['anpa-container-content-bottom']}>
                    <div className={styles['anpa-cc-b-b']}>
                        <Button className="mr-30">Cancel</Button>
                        <Button className="txt primary">Add New Payout Account</Button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AddNewPayoutAccount;