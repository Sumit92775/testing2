import {Form, InputNumber, Select} from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Option } from 'antd/lib/mentions';
import React from 'react';
import styles from '../../styles/components/Booking-Payments-Modal.module.scss';

const BookingAndPaymentsModal = () =>{

    function handleChange(value : any) {
        console.log(`selected ${value}`);
    }

    function onChange(value : any) {
        console.log('changed', value);
    }

    return(
        <div className="pl-12 pr-12">
            <Form>
                <Form.Item label="Payout Frequency">
                    <Select className="h43" defaultValue="Daily" onChange={handleChange}>
                            <Option value="Daily">Daily</Option>
                            <Option value="Daily1">Daily</Option>
                            <Option value="Daily2">Daily</Option>
                            <Option value="Daily3">Daily</Option>
                            <Option value="Daily4">Daily</Option>
                    </Select>
                </Form.Item>
                
                <Form.Item className="mt-25" label="Pay At Venue">
                    <Checkbox>Yes</Checkbox>
                    <Checkbox>No</Checkbox>
                </Form.Item>

                <Form.Item label="Allowed to book time" className="mt-13 mb-14">
                    <div className={styles['allowed-to-booking-container']}>
                        <Form.Item className={styles['input-number-form-item']}>
                            <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                        </Form.Item>
                        
                        <Form.Item>
                            <Select className="h43" defaultValue="Daily" onChange={handleChange}>
                                    <Option value="Daily">Daily</Option>
                                    <Option value="Minutes">Minutes</Option>
                                    <Option value="Hours">Hours</Option>
                                    <Option value="Weeks">Weeks</Option>
                                    <Option value="Days">Days</Option>
                            </Select>
                        </Form.Item>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )

}
export default BookingAndPaymentsModal;