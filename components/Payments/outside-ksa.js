import React from 'react';
import { Tabs, Input, Select } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import {Form} from 'antd';
import { useRouter } from 'next/router';
import ResetPassword from '../Common/ResetPassword';
import styles from '../../styles/components/Add-Payout-Method-modal.module.scss';


const OutsideKsa = () =>{

    return(
        <div className={styles['anpa-container-content']}>
            <Form>
                <Form.Item className="mt-13">
                    <span ><strong className="primary-txt clr">Beneficiary Bank Details</strong></span>
                </Form.Item>

                <Form.Item>
                    <div className={styles['inside-form']}>
                        <Form.Item label="Bank Name">
                            <Input placeholder="ex:Ehsaan H"></Input>
                        </Form.Item>
                        <Form.Item label="SWIFT/BIC Code">
                            <Input placeholder="ex:BJAZSAJE006"></Input>
                        </Form.Item>
                    </div>
                </Form.Item>
                <Form.Item>
                    <div className={styles['inside-form']}>
                        <Form.Item label="Account Number">
                            <Input placeholder="ex:000000608010167519"></Input>
                        </Form.Item>
                        <Form.Item label="Beneficiary Bank Address Line 1">
                            <Input placeholder="Beneficiary Address line 1"></Input>
                        </Form.Item>
                    </div>
                </Form.Item>
                <Form.Item>
                    <div className={styles['inside-form']}>
                        <Form.Item label="Beneficiary Bank Address Line 2">
                            <Input placeholder="Beneficiary Address line 1"></Input>
                        </Form.Item>
                        <Form.Item label="Beneficiary Bank Address Line 3">
                            <Input placeholder="Beneficiary Address line 1"></Input>
                        </Form.Item>
                    </div>
                </Form.Item>
                <Form.Item>
                    <div className={styles['inside-form']}>
                        <Form.Item label="Country">
                            <Input placeholder="United States"></Input>
                        </Form.Item>
                        <Form.Item label="City">
                            <Input placeholder="NY" />
                        </Form.Item>
                    </div>
                </Form.Item>

                <Form.Item className="mt-5 mb-3">
                    <span ><strong className="primary-txt clr">Beneficiary Details</strong></span>
                </Form.Item>

                <Form.Item>
                    <div className={styles['inside-form']}>
                        <Form.Item label="Beneficiary First Name">
                            <Input placeholder="First Name"></Input>
                        </Form.Item>
                        <Form.Item label="Beneficiary Middle Name">
                            <Input placeholder="Middle Name"></Input>
                        </Form.Item>
                    </div>
                </Form.Item>
                <Form.Item>
                    <div className={styles['inside-form']}>
                        <Form.Item label="Beneficiary Last Name">
                            <Input placeholder="Last Name"></Input>
                        </Form.Item>
                        <Form.Item label="Beneficiary Address Line 3">
                            <Input placeholder="Beneficiary Address Line 3"></Input>
                        </Form.Item>
                    </div>
                </Form.Item>
                <Form.Item>
                    <div className={styles['inside-form']}>
                        <Form.Item label="Country">
                            <Input placeholder="ex:Al Rajhi Bank"></Input>
                        </Form.Item>
                        <Form.Item label="City">
                            <Input placeholder="ex:000000608010167519"></Input>
                        </Form.Item>
                    </div>
                </Form.Item>
                <Form.Item>
                    <div className={styles['inside-form-another']}>
                        <Form.Item label="Mobile Number">
                            
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
    )

}

export default OutsideKsa;