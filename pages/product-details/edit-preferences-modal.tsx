import { Checkbox, DatePicker, Form, Select, TimePicker } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { useState } from 'react';
import styles from './Styles.module.scss';
import cx from 'classnames';


const EditPreferences = () =>{


    const [chooseTimeSlot, setChooseTimeSlot] = useState();
    const timeSlot = [
        {id : 1, value : "08 AM"},
        {id : 2, value : "08:15 AM"},
        {id : 3, value : "08:30 AM"},
        {id : 4, value : "08:45 AM"},
        {id : 5, value : "09 AM"},
        {id : 6, value : "09:15 AM"},
        {id : 7, value : "09:30 AM"},
        {id : 8, value : "09:45 AM"},
        {id : 9, value : "10 AM"},
        {id : 10, value : "10:15 AM"},
        {id : 11, value : "10:30 AM"},
        {id : 12, value : "10:45 AM"},
        {id : 13, value : "11 AM"},
        {id : 14, value : "11:15 AM"},
        {id : 15, value : "11:30 AM"},
        {id : 16, value : "11:45 AM"},
        {id : 17, value : "12 PM"},
        {id : 18, value : "12:15 PM"},
        {id : 19, value : "12:30 PM"},
        {id : 20, value : "12:45 PM"},
        {id : 21, value : "01 PM"},
        {id : 22, value : "01:15 PM"},
        {id : 23, value : "01:30 PM"},
        {id : 24, value : "01:45 PM"},
        {id : 25, value : "02 PM"},
        {id : 26, value : "02:15 PM"},
        {id : 27, value : "02:30 PM"},
        {id : 28, value : "02:45 PM"},
        {id : 29, value : "03 PM"},
        {id : 30, value : "03:15 PM"},
        {id : 31, value : "03:30 PM"},
        {id : 32, value : "03:45 PM"},
        {id : 33, value : "04 PM"},
        {id : 34, value : "04:15 PM"},
        {id : 35, value : "04:30 PM"},
        {id : 36, value : "04:45 PM"},
        {id : 37, value : "05 PM"},
        {id : 38, value : "05:15 PM"},
        {id : 39, value : "05:30 PM"},
        {id : 40, value : "05:45 PM"},
        {id : 42, value : "06 PM"},
        {id : 43, value : "06:15 PM"},
        {id : 44, value : "06:30 PM"},
        {id : 45, value : "06:45 PM"},
        {id : 46, value : "07 PM"},
        {id : 47, value : "07:15 PM"},
        {id : 48, value : "07:30 PM"},
        {id : 49, value : "07:45 PM"},
        {id : 50, value : "08 PM"},
        {id : 51, value : "08:15 PM"},
        {id : 52, value : "08:30 PM"},
        {id : 53, value : "08:45 PM"},
        {id : 54, value : "09 PM"},
        {id : 55, value : "09:15 PM"},
        {id : 56, value : "09:30 PM"},
        {id : 57, value : "09:45 PM"},
        {id : 58, value : "10 PM"},
        {id : 59, value : "10:15 PM"},
        {id : 60, value : "10:30 PM"},
        {id : 61, value : "10:45 PM"},
        {id : 62, value : "11 PM"},
        {id : 63, value : "11:15 PM"},
        {id : 64, value : "11:30 PM"},
        {id : 65, value : "11:45 PM"},
        {id : 66, value : "12 AM"},
    ];

    
    function handleChange(value : any) {
        console.log(`selected ${value}`);
    }

    function onChange(value : any, dateString : any) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }
      
    function onOk(value : any) {
    console.log('onOk: ', value);
    }

    function handleSlotChoosen(id: any){
        setChooseTimeSlot(id);
    }
    
    return(
        <div className="container">
            <Form>
                <Form.Item label="Services">
                    <Checkbox>Dine in</Checkbox>
                    <Checkbox>Pick up</Checkbox>
                </Form.Item>
                <Form.Item className="mt-13" label="Select Staff">
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="jack">Staff 1</Option>
                        <Option value="lucy">Staff 2</Option>
                        <Option value="Yiminghe">Staff 3</Option>
                    </Select>
                </Form.Item>
                <Form.Item className="mt-13">
                    <div className="grid-view grid-2">
                        <Form.Item label="Date and Time">
                            <DatePicker showTime onChange={onChange} onOk={onOk} />
                        </Form.Item>
                    </div>
                </Form.Item>
                <Form.Item>
                    <div className={cx(styles['auto-width'],"grid-view grid-9 rowgap-20 colgap-20 mt-20")}>
                        {timeSlot.map((obj) =>{
                            return(
                                <div key={obj.id} className={chooseTimeSlot == obj.id ?  cx(styles['time-container'],styles['selectedTimeSlot']) : cx(styles['time-container'],styles['unselectedTimeSlot'])} onClick={() =>handleSlotChoosen(obj.id)}>
                                    <span>{obj.value}</span>
                                </div>
                            )
                        })}
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default EditPreferences;