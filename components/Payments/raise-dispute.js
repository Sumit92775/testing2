import React from 'react';
import {Form, Input} from 'antd';

const {TextArea} = Input;

const RaiseDisputes = (props) =>{
    return(
        <div className="rd-container">

            <Form>
                <Form.Item>
                    <div className="grid-view grid-2">
                        <div className="flex center-content direction">
                            <span><strong className="txt dark1">Txn. Id</strong></span>
                            <span>{props?.val?.transactionId}</span>
                        </div>
                        <div className="flex center-content direction">
                            <span><strong className="txt dark1">Time</strong></span>
                            <span>{props?.val?.time}</span>
                        </div>
                    </div>
                </Form.Item>

                <Form.Item>
                    <div className="flex center-content direction">
                        <h2>${props?.val?.amount.amount}</h2>
                        <span>Txn. Status</span>
                        <span className="pt-8 pr-8 pb-8 pl-8 txt dark1" style={{backgroundColor : "pink", borderRadius : "6px"}}>{props?.val?.status}</span>
                    </div>
                </Form.Item>

                <Form.Item className="pr-12" label="Message">
                    <TextArea rows={4}></TextArea>
                </Form.Item>
            </Form>

        </div>
    )
}

export default RaiseDisputes;