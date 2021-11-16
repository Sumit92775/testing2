import React from 'react';
import {Form, Select, Input, Slider, Divider, Button, Checkbox, Row, Col} from 'antd';
import { Option } from 'antd/lib/mentions';
import styles from '../../styles/components/Payments-Details-Payout.module.scss'


const PaymentDetails1 = () =>{

    return(
        <div>
            <span><span className="material-icons">arrow_back_ios</span>Go Back</span>
            <div className={styles['anpa-container']}>
                <div className="card card2 p-0 mb-20 mt-10">
                <h5 className="mt-22 pb-21 pl-27 pr-27" style={{borderBlockEnd : "var(--border-neutral-3)"}}>Add New Payout Account</h5>
                <div className={styles['anpa-container-content']}>
                    <Form>
                        <Form.Item label="You are operating from">
                            <Checkbox className="mr-70">KSA</Checkbox>
                            <Checkbox>Outside KSA</Checkbox>
                        </Form.Item>
                        <Form.Item className="mt-13">
                            <span ><strong className="primary-txt">Banking Account Information</strong></span>
                        </Form.Item>

                        <Form.Item>
                            <div className={styles['inside-form']}>
                                <Form.Item label="Bank Name">
                                    <Input placeholder="ex:Ehsaan H"></Input>
                                </Form.Item>
                                <Form.Item label="IBAN">
                                    <Input placeholder="SA 12-1234-1234-1234-1234-1234"></Input>
                                </Form.Item>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <div className={styles['inside-form']}>
                                <Form.Item label="Beneficiary First Name">
                                    <Input placeholder="ex:Hammed"></Input>
                                </Form.Item>
                                <Form.Item label="Beneficiary Middle Name">
                                    <Input placeholder="ex:Halais"></Input>
                                </Form.Item>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <div className={styles['inside-form']}>
                                <Form.Item label="Beneficiary Last Name">
                                    <Input placeholder="ex:Al Rajhi Bank"></Input>
                                </Form.Item>
                                <Form.Item label={<span>Establishmanet/Company Name <span style={{color : "red"}}>(From Profile)</span></span>}>
                                    <Input placeholder="ex:000000608010167519"></Input>
                                </Form.Item>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <div className={styles['inside-form']}>
                                <Form.Item label={<span>Commercial Registration Number(CRN)<span style={{color : "red"}}> (From Profile)</span></span>}>
                                    <Input placeholder="12-1234-1234-1234-1234-1234"></Input>
                                </Form.Item>
                                <Form.Item label="Beneficiary Last Name">
                                   
                                    <div className={styles['mobile-number-input']}>
                                        <Select placeholder="+91">
                                            <Select.Option value="+91">+91</Select.Option>
                                        </Select>
                                        <Input placeholder="ex:9385738374" />
                                    </div>
                                </Form.Item>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
                <Divider className="mb-15 mt-0"></Divider>

                <div className={styles['anpa-container-content-bottom']}>
                    <div className={styles['anpa-cc-b-t']}>
                        <p><Checkbox> </Checkbox>I confirm the correctness of the entered data and take full responsibility before the official authorities without any responsibility on the platform.</p>
                    </div>
                    <div className={styles['anpa-cc-b-b']}>
                        <Button className="mr-30">Cancel</Button>
                        <Button className="primary">Add New Payout Account</Button>
                    </div>
                </div>

                </div>

            </div>
        </div>

    )
}

export default PaymentDetails1;