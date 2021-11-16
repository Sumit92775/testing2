import React, { useState } from 'react';
import { message, Form, Input, Button, Checkbox, Divider } from 'antd';
import Header from "../components/Public/Header";
import FooterMenus from "../components/FooterMenus";
import Footer from "../components/Footer";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { PasswordInput } from 'antd-password-input-strength';
import useTranslation from 'next-translate/useTranslation';
import { sendEmailOTP, sendPhoneOTP, changePasswordWithOTP } from '../services/auth';

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        type: '',
        OTP: '',
        password: ''
    });
    const [disableBtn, toggleButton] = useState(false);
    const { t } = useTranslation('validator');
    let emailOtpBtn:HTMLElement, phoneOtpBtn:HTMLElement, submitBtn:HTMLElement;
    const [form] = Form.useForm(),
    router = useRouter(),

    onFinish = () => {
        console.log(formData)
        console.log(disableBtn)
        changePasswordWithOTP({
            "emailOrPhone": formData.emailOrPhone,
            "OTP": `${form.getFieldsValue().otp1}${form.getFieldsValue().otp2}${form.getFieldsValue().otp3}${form.getFieldsValue().otp4}`,
            "password":form.getFieldsValue().password
        })
        .then(res => {
            console.log(res)
            if(res.status) {
                router.push(`${ process.env.base_url }`);
            } else {
                message.config({duration: 5, top: 60})
                message.error( '' );
            }
        })
        .catch(error => {
            console.log(error)
        })
    },
    onKeyPress = (e:any) => {
        console.log(e)
        if(!(e.charCode >= 48 && e.charCode <= 57)) {
            e.preventDefault();
            return false;
        }
    },

    reSendOTP = () => {
        const otpData = JSON.parse(localStorage.getItem('opt-verification') as string);
        sendOTP(otpData['emailOrPhone'], otpData['type']);
    },

    showOTPForm = () => {
        setFormControls(
        <>
            <div className="verification-code grid-view">
                <Form.Item name={['otp1']} rules={[{required: true, message: ''}]}>
                    <Input maxLength={1} onKeyPress={ onKeyPress } />
                </Form.Item>
                <Form.Item name={['otp2']} rules={[{required: true, message: ''}]}>
                    <Input maxLength={1} onKeyPress={ onKeyPress } />
                </Form.Item>
                <Form.Item name={['otp3']} rules={[{required: true, message: ''}]}>
                    <Input maxLength={1} onKeyPress={ onKeyPress } />
                </Form.Item>
                <Form.Item name={['otp4']} rules={[{required: true, message: ''}]}>
                    <Input maxLength={1} onKeyPress={ onKeyPress } />
                </Form.Item>
                <div className="full">
                    <Button className="primary pull-right small mt-10" type="link" onClick={ reSendOTP }>Re-send</Button>
                </div>
            </div>
            <Form.Item className="password-input" name={['password']} label='Password' rules={[
                { required: true, message: t('required', {field: 'Password'}) },
                { min: 8, max: 50, message: t('min max', {field: 'Password', min: 8, max: 50}) }
                ]}>
                <PasswordInput />
            </Form.Item>
    
            <Button className="primary" htmlType="submit">Reset Password</Button>
        </>)
    },

    reSendEmailOTP = () => sendOTP(form.getFieldsValue().email, 'email'),
    
    reSendPhoneOTP = () => sendOTP(form.getFieldsValue().phone, 'phone'),
    
    sendOTP = (value:string, type:string) => {
        emailOtpBtn?.classList.add('disabled');
        phoneOtpBtn?.classList.add('disabled');
        console.log(value, type, formData);

        (type == 'email' ? sendEmailOTP({ email: value }) : sendPhoneOTP({ phoneNumber: value }))
        .then((res:any) => {
            if(res.status) {
                showOTPForm();
                localStorage.setItem('opt-verification', JSON.stringify({emailOrPhone : value, type: type}));
                setFormData({...formData, emailOrPhone : value, type: type });
            } else {
                message.error(res.message);
            }
        })
    },

    checkEmail = (rule:any, value:any, callback:any) => {
        emailOtpBtn.classList.add('disabled')
        if(value) {
            if((/^(?=[^@]*[A-Za-z])[^\W|_/\s][\w\-\.]+@([\w\-]+\.)+[\w\-]{2,20}$/).test(value)) {
                callback();
                emailOtpBtn.classList.remove('disabled')
            } else {
                callback(t('invalid', {field: 'Email'}))
            }
        } else {
            callback();
        }
    },

    checkPhoneNumber = (rule:any, value:any, callback:any) => {
        phoneOtpBtn.classList.add('disabled')
        if(value) {
            if((/^[1-9][0-9]{9}$/).test(value)) {
                phoneOtpBtn.classList.remove('disabled')
            } else {
                callback(t('invalid', {field: 'Phone Number'}))
            }
        } else {
            callback();
        }
    }

    const [formControls, setFormControls] = useState(
        <>
            <Input.Group className="otp-verification">
                <Form.Item name={['email']} label='Email' rules={[{ required: true }, {validator: checkEmail}]}>
                    <Input placeholder={ t('placeholder:loginUserName') } />
                </Form.Item>
                <Form.Item label="&nbsp;">
                    <Button ref={c => {c ? emailOtpBtn = c : ''}} className="primary disabled" onClick={ reSendEmailOTP }>Send OTP</Button>
                </Form.Item>
            </Input.Group>

            <Divider className="m-0">or</Divider>
            
            <Input.Group className="otp-verification">
                <Form.Item name={['phone']} label='Phone Number' rules={[{ required: true }, { validator: checkPhoneNumber }]}>
                    <Input placeholder='Phone Number' />
                </Form.Item>
                <Form.Item label="&nbsp;">
                    <Button ref={c => {c ? phoneOtpBtn = c : ''}} className="primary disabled" onClick={ reSendPhoneOTP }>Send OTP</Button>
                </Form.Item>
            </Input.Group>
        </>
    );


    return (
        <div className="layout three-rows signup">
            <header>
                <Header></Header>
            </header>
            <main>
            <div className="content-wrapper table mb-56">
                    <h4 className="center-text mt-67 mb-67">Forgot Password</h4>
                    <Form
                        className="grid-view grid-1 rowgap-24"
                        form={form}
                        onFinish={onFinish}
                        layout="vertical">
                        
                        { formControls }

                    </Form>
                </div>
            </main>
            <footer>
                <FooterMenus />
                <Footer />
            </footer>
        </div>
    )
}

export default ForgotPassword