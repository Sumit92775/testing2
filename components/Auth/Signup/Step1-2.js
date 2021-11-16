// import { Form, Input, Button } from 'antd';
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { next } from '../../../actions/signup';

// const Step1_2 = () => {
//     const [form] = Form.useForm(),
//     dispatch = useDispatch(),

//     nextStep = () => dispatch(next());

//     return (
//         <div className="content-wrapper table auto-width">
//             <div className="card card-555 center mt-67">
//                 <h4 className="center-text">Verify Your Phone</h4>
//                 <p>A Verification code was sent to your provided mobile phone number,<br/>
//                     please enter the code to proceed</p>
//                 <Form
//                     className="grid-view grid-1 colgap-42 rowgap-20 mt-25"
//                     form={form}
//                     layout="vertical">
//                     <Form.Item className="verification-code">
//                         <Input maxLength={1} />
//                         <Input maxLength={1} />
//                         <Input maxLength={1} />
//                         <Input maxLength={1} />
//                     </Form.Item>
//                     <Button className="primary mb-3" onClick={nextStep}>Verify Code</Button>
//                     <p>Didn&quot;t Received One? <strong><a>Resend Code</a></strong></p>
//                 </Form>
//             </div>
//         </div>
//     )
// }

// export default Step1_2


import { Form, Input, Button, message } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { next } from '../../../actions/signup';
import { sendPhoneOTP, verifyOTP } from '../../../services/auth';

const Step1_2 = ({ formData }) => {
    const [form] = Form.useForm(),
    dispatch = useDispatch(),

    nextStep = () => dispatch(next()),
    resendOTP = () => {
        sendPhoneOTP({phoneNumber: localStorage.getItem('phoneNumber')})
        .then(res => {
            message.config({duration: 5, top: 60});
            message.success( 'OTP Sent!' );
            form.setFields({
                otp1: ""
            })
            form.setFields({
                otp2: ""
            })
        })
        .catch(error => console.error(error))
    },

    reVerifyOTP = () => {
        const formData = form.getFieldsValue();
        verifyOTP({
            phoneNumber: localStorage.getItem('phoneNumber'),
            OTP: `${formData.otp1}${formData.otp2}${formData.otp3}${formData.otp4}`
        })
        .then(res => {
            if(res.statusCode == 404) {
                message.error( 'Invalid OTP!' );
            } else {
                message.config({duration: 5, top: 60});
                message.success( 'OTP Verified!' );
                dispatch(next());
            }
        })
        .catch(error => console.error(error))
    },

    onKeyPress = (e) => {
        if(!(e.charCode >= 48 && e.charCode <= 57)) {
            e.preventDefault();
            return false;
        }
    }

    return (
        <div className="content-wrapper table auto-width">
            <div className="card card-555 center mt-67">
                <h4 className="center-text">Verify Your Phone</h4>
                <p>A Verification code was sent to your provided mobile phone number,<br/>
                    please enter the code to proceed</p>
                <Form
                    className="grid-view grid-1 colgap-42 rowgap-20 mt-25"
                    form={form}
                    layout="vertical">
                    <div className="verification-code">
                        <Form.Item name={['otp1']}>
                            <Input maxLength={1} onKeyPress={ onKeyPress } />
                        </Form.Item>
                        <Form.Item name={['otp2']}>
                            <Input maxLength={1} onKeyPress={ onKeyPress } />
                        </Form.Item>
                        <Form.Item name={['otp3']}>
                            <Input maxLength={1} onKeyPress={ onKeyPress } />
                        </Form.Item>
                        <Form.Item name={['otp4']}>
                            <Input maxLength={1} onKeyPress={ onKeyPress } />
                        </Form.Item>
                    </div>
                    <Button className="primary mb-3" onClick={reVerifyOTP}>Verify Code</Button>
                    <p>Didn&quot;t Received One? <strong><a onClick={resendOTP}>Resend Code</a></strong></p>
                </Form>
            </div>
        </div>
    )
}

export default Step1_2
