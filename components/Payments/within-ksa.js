import { Input, Select } from 'antd';
import {Form} from 'antd';
import React from 'react';
import styles from '../../styles/components/Add-Payout-Method-modal.module.scss';


const WithinKsa = () =>{
    
    return(
        <div className={styles['anpa-container-content']}>
            <Form>
                <Form.Item>
                    <span ><strong className="primary-txt clr" >Banking Account Information</strong></span>
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
    )

}

export default WithinKsa;