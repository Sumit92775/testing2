import styles from '../../styles/components/Profile-Change-Mobile-Number.module.scss'
import React, { useState } from 'react';
import {Button, Input, message, Form, Select} from 'antd';
// import styles from '../../styles/components/Profile-Change-Email.module.scss'
import { sendEmailOTP, sendPhoneOTP, validateEmail, validatePhoneNumber, verifyEmailOTP, verifyOTP, verifyPhoneOTP } from '../../services/auth';
import useTranslation from 'next-translate/useTranslation';

const ChangeMobileNumber = (props: any) => {

 
    const [newEmailSetted, setNewEmailSetted] = useState(false);
    const [btnEnabled, setBtnEnabled] = useState(true);
    const [btnEnabled1, setBtnEnabled1] = useState(true);
    const [msg, setMsg] = useState("");
     
    const [otp1, setOtp1] = useState("");
    const [otp2, setOtp2] = useState("");
    const [otp3, setOtp3] = useState("");
    const [otp4, setOtp4] = useState("");


    const [number, setNumber] = useState("");
    const { t } = useTranslation('validator');

    const sendOTP = async () =>{
        let isSuccessfull = await sendPhoneOTP({
            phoneNumber : number
        });
        // message.info("Otp send");
        // message.info(isSuccessfull.message);
        message.config({duration: 5, top: 60})
        // message.error(isSuccessfull.message);
        

        if(isSuccessfull.status == true){
            setBtnEnabled1(false);
            // message.info(isSuccessfull.message);
        }else{
            // alert(isSuccessfull.message);
            message.info(isSuccessfull.message);
        }
    }

    const checkPhoneNumber = (rule: any, value: any, callback: any) => {

        console.log("Inside CheckPhomeNumber!!");
        

        if(form.getFieldsValue().phoneNumber) {
            if(form.getFieldsValue().countryCode) {
                if((/^[1-9][0-9]{9}$/).test(form.getFieldsValue().phoneNumber)) {
                    validatePhoneNumber({phoneNumber: `${form.getFieldsValue().countryCode}${form.getFieldsValue().phoneNumber}`})
                    .then(res => {
                        if(res.status) {
                            callback();
                            setNumber(form.getFieldsValue().phoneNumber);
                            setBtnEnabled(false);
                            setMsg(`Mobile Number Available`);
                            console.log(number);
                            // setNumber(`${form.getFieldsValue().countryCode}${form.getFieldsValue().phoneNumber}`)
                        } else {
                            callback(false);
                            setBtnEnabled(true);
                            setMsg("");
                            setNumber("");
                            message.error(t('value already taken', { value: form.getFieldsValue().phoneNumber }));
                        }
                    })
                } else {
                    setBtnEnabled(true);
                    setMsg("");
                    callback(t('invalid', {field: 'Store Mobile Number'}))
                }
            } else {
                setBtnEnabled(true);
                callback(t('please select country code'))
            }
        } else {
            callback();
            setMsg("");
        }
    }
    const [form] = Form.useForm();

    const resendOTP = () => {
        sendPhoneOTP({phoneNumber: number})
        .then(res => {
            message.config({duration: 5, top: 60});
            // message.success( 'OTP Sent!' );
        })
        .catch(error => console.error(error))
    }

    const reVerifyOTP = () => {
        const formData = form.getFieldsValue();
        setOtp1(formData.otp1);
        setOtp2(formData.otp2);
        setOtp3(formData.otp3);
        setOtp4(formData.otp4);


        // const formData = form.getFieldsValue();
        verifyPhoneOTP({
            phoneNumber: number,
            OTP: `${formData.otp1}${formData.otp2}${formData.otp3}${formData.otp4}`
        })
        .then(res => {
            if(res.status) {
                message.config({duration: 5, top: 60});
                message.success( 'OTP Verified!' );
                props?.setMobileNumber(number);
                setNumber("");
                form.setFieldsValue({phoneNumber: ""});
                form.setFieldsValue({otp1: ""});
                form.setFieldsValue({otp2: ""});
                form.setFieldsValue({otp3: ""});
                form.setFieldsValue({otp4: ""});
                setMsg("");
                props.cancelModal();
                setNewEmailSetted(false);
            } else {
                message.error( 'Invalid OTP!' );
            }
        })
        .catch(error => console.error(error));
    }

    const onKeyPress = (e: any) => {
        if(!(e.charCode >= 48 && e.charCode <= 57)) {
            e.preventDefault();
            return false;
        }
    }
    
    return(

        <>
        {
            newEmailSetted === false? 

            <div className={styles['container']}>
                <Form
                        className="grid-view grid-1 colgap-42 rowgap-10"
                        form={form}
                        // onFinish={onFinish}
                        layout="vertical">
                   <Form.Item>
                   <div className="phone-number grid-view">
                                <Form.Item className="full no-control mb-5" name={['countryCode']} label="New Mobile Number" rules={[{ required: true }]}>
                                    
                                </Form.Item>
                                <Form.Item name={['countryCode']}  validateTrigger={['onSelect']} rules={[
                                    { required: true, message:  t('required', {field: 'Country Code'}) },
                                    ]}>
                                    <Select placeholder="+91">
                                        <Select.Option value="+91">+91</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item initialValue={number} name={['phoneNumber']} hasFeedback validateTrigger={['onBlur']} rules={[
                                    { validator: checkPhoneNumber },
                                    ]}>
                                    <Input defaultValue="8687" maxLength={10} onChange={(event) => console.log(event)
                                    } placeholder="ex:9385738374" />
                                </Form.Item>
                            </div>
                   </Form.Item>
                   {msg.length > 0 ? 
                     <Form.Item>
                        <span className="txt success float right">
                            {msg}
                        </span>
                    </Form.Item>
                    : 
                    <>
                    </>
                    }
                    <Form.Item>
                        <Button className="primary txt mt-20" disabled={btnEnabled} onClick={()=>{setNewEmailSetted(true);
                        sendOTP();
                        }}>Submit</Button>
                    </Form.Item>

                    <Form.Item className="pull right">
                        <Button className="txt primary" onClick={() =>{
                            props.cancelModal();
                            setNumber("");
                            form.setFieldsValue({phoneNumber: ""});
                            setMsg("");
                            form.getFieldsValue().phoneNumber = "";
                            }}>Cancel</Button>
                    </Form.Item>
                </Form>
            </div>
            :
            <div className="content-wrapper table auto-width">
            <div className="card center mt-67">
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
        }
        </>
    );
}

 
export default ChangeMobileNumber;
