import React from 'react';
import {Form, Input} from 'antd'

const {TextArea} = Input;

const Dispute = (props) =>{
    return(
        <div>
            <Form>
                <Form.Item>
                    <div className="grid-view grid-2  mt-10">
                        <div className="flex center-content direction">
                            <span><strong className="txt dark1">Dispute Id</strong></span>
                            <span>xxxxxxxxxx</span>
                        </div>
                        <div className="flex center-content direction">
                            <span><strong className="txt dark1">Dispute Time</strong></span>
                            <span>12:00 PM</span>
                        </div>
                    </div>
                </Form.Item>

                <Form.Item>
                    <div className="grid-view grid-2  mt-10">
                        <div className="flex center-content direction">
                            <span><strong className="txt dark1">Txn. Id</strong></span>
                            <span>xxxxxxxxxx</span>
                        </div>
                        <div className="flex center-content direction">
                            <span><strong className="txt dark1">Txn. Time</strong></span>
                            <span>12:00 PM</span>
                        </div>
                    </div>
                </Form.Item>
                
                <Form.Item>
                    <div className="grid-view grid-2 mt-10">
                        <div className="flex center-content direction">
                            <span><strong className="txt dark1">Txn. Value</strong></span>
                            <span>$78</span>
                        </div>
                        <div className="flex center-content direction">
                            <span><strong className="txt dark1">Txn. Status</strong></span>
                            <span>Success</span>
                        </div>
                    </div>
                </Form.Item>

                <Form.Item>
                    <div className="flex center-content direction">
                        <span>Dispute</span>
                        <span className="pt-8 pr-8 pb-8 pl-8 txt dark1 mb-10" style={{backgroundColor : "pink", borderRadius : "6px"}}>Success</span>
                    </div>
                </Form.Item>

                <Form.Item label="Your Message">
                   <span>Amount was deducted from my card but not credited into my wallet.</span>
                </Form.Item>
                
                <Form.Item className="mb-10" label="Support Team Response">
                    <span>We have credited $78 to your wallet. Please check your transaction history for same.</span>
                </Form.Item>

                <span className="fz-11 txt pull center">For Further assistance feel free to write to us on support@saloonplus.com.</span>
            </Form>
        </div>
    
    )
}

export default Dispute;