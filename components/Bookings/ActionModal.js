import React from 'react';
import cx from 'classnames';
import {DatePicker, Form} from 'antd';

const { RangePicker } = DatePicker;

const ActionModal = (props) =>{
    return(

        
        <div>
            {props.type === "Reschedule" 
            ?

            <Form.Item className="auto-width ht-43">
                    <div className={cx('picker',  `booking-picker`)}>
                        <RangePicker style={{height : "50px !important"}} allowClear={false} separator={<span>to</span>} suffixIcon={false}></RangePicker>
                    </div>
                </Form.Item>
            :
            <div>
                Are You Want to {props.title}?
            </div>
        }

        </div>
    )
}

export default ActionModal;