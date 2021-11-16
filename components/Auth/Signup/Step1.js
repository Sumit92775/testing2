import React, { useState } from 'react';
import { RequiredMark } from 'antd/lib/form/Form';
import { useDispatch } from 'react-redux';
import { next } from '../../../actions/signup';
import { PasswordInput } from 'antd-password-input-strength';
import useTranslation from 'next-translate/useTranslation';
import { signup, validateEmail, validateUserName, validatePhoneNumber, sendPhoneOTP } from '../../../services/auth';
import { authenticate } from '../../../actions/user';
import { Form, Input, Button, Radio, Checkbox, Select, message } from 'antd';
import PropTypes from 'prop-types';

const Step1 = ({ onNext }) => {
    const { t } = useTranslation('validator');
    const [form] = Form.useForm(),
    dispatch = useDispatch(),

    nextStep = () => dispatch(next());

    const validatePassword = (rule, value, callback) => {
        if (value && value !== form.getFieldsValue().password) {
            callback("Password and Confirm Password must me same");
        } else {
            callback()
        }
    },
    onFinish = (values) => {
        message.config({duration: 5, top: 60})
        const formData = {
            userType: 1,
            userName: values.userName,
            password: values.password,
            phoneNumber: values.phoneNumber,
            email: values.email
        };
        signup(formData)
        .then(res => {
            if(res.status) {
                localStorage.setItem('accessToken', res.accessToken);
                localStorage.setItem('phoneNumber', values.phoneNumber);
                sendPhoneOTP({phoneNumber: values.phoneNumber})
                .then(res => {
                    dispatch(authenticate(true));
                    dispatch(next());
                    onNext && onNext(formData);
                })
                .catch(error => console.error(error))
            } else {
                message.error( t(res.message) );
            }
        })
        .catch(error => {
            console.error(error)
        })
    },
    checkEmail = (rule, value, callback) => {
        if(value) {
            if((/^(?=[^@]*[A-Za-z])[^\W|_/\s][\w\-\.]+@([\w\-]+\.)+[\w\-]{2,20}$/).test(value)) {
                validateEmail({email: value})
                .then(res => {
                    if(res.status) {
                        callback();
                    } else {
                        callback('');
                        message.error(t('value already taken', { value: value }));
                    }
                })
            } else {
                callback(t('email', {field: 'Store Email'}))
            }
        } else {
            callback();
        }
    },

    checkUserName = (rule, value, callback) => {
        if(value) {
            let len = value.trim().length// 
            if(len > 1){
                let ch = value.charAt(0);
                console.log("ch: ",ch);
                if(ch === ' '){
                    // console.log("Value: ",value);
                    callback(t('first character not be space', {field: 'userName'}));
                }else{
                    validateUserName({userName: value})
                    .then(res => {
                        if(res.status) {
                            callback();
                        } else {
                            callback('');
                            message.error(t('value already taken', { value: value }));
                        }
                    })
                }
            }else{
                callback(t('invalid username', {field: 'userName'}));
            }
        } else {
            callback()
        }
    },
    
    checkPhoneNumber = (rule, value, callback) => {
        if(form.getFieldsValue().phoneNumber) {
            if(form.getFieldsValue().countryCode) {
                if((/^[1-9][0-9]{9}$/).test(form.getFieldsValue().phoneNumber)) {
                    validatePhoneNumber({phoneNumber: `${form.getFieldsValue().countryCode}${form.getFieldsValue().phoneNumber}`})
                    .then(res => {
                        if(res.status) {
                            callback();
                        } else {
                            callback(false);
                            message.error(t('value already taken', { value: form.getFieldsValue().phoneNumber }));
                        }
                    })
                } else {
                    callback(t('invalid', {field: 'Store Mobile Number'}))
                }
            } else {
                callback(t('please select country code'))
            }
        } else {
            callback();
        }
    }

    return (
        <>
            <div>
                <div className="content-wrapper table mb-56">
                    {/* <h4 className="center-text mt-67 mb-67">Register To Sell Via Saloon Plus</h4> */}
                    <Form
                        className="grid-view grid-2 colgap-42 rowgap-24 mt-100"
                        form={form}
                        onFinish={onFinish}
                        layout="vertical">
                        <Form.Item name={['userName']} hasFeedback className="span-2" label="Username" validateTrigger={['onBlur']} rules={[
                            { required: true, message: t('required', {field: 'Store Name'}) },
                            { validator: checkUserName },
                            ]}>
                            <Input placeholder="ex:halais" />
                        </Form.Item>
                        <Form.Item name={['email']} hasFeedback label="Email" validateTrigger={['onBlur']} rules={[
                            { required: true, message: t('required', {field: 'Store Email'}) },
                            { validator: checkEmail },
                            ]}>
                            <Input placeholder="ex:halais" />
                        </Form.Item>
                        <div>
                            <div className="phone-number grid-view">
                                <Form.Item className="full no-control" name={['countryCode']} label="Mobile Number" rules={[{ required: true }]}>
                                    
                                </Form.Item>
                                <Form.Item name={['countryCode']}  validateTrigger={['onSelect']} rules={[
                                    { required: true, message:  t('required', {field: 'Country Code'}) },
                                    ]}>
                                    <Select placeholder="+91">
                                        <Select.Option value="+91">+91</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item name={['phoneNumber']} hasFeedback validateTrigger={['onBlur']} rules={[
                                    { required: true, message: t('required', {field: 'Store Mobile Number'}) },
                                    { validator: checkPhoneNumber }
                                    ]}>
                                    <Input placeholder="ex:9385738374" maxLength={10}/>
                                </Form.Item>
                            </div>
                        </div>
                        <Form.Item className="password-input" name={['password']} hasFeedback label="Password" rules={[
                            { required: true, message: t('required', {field: 'Password'}) },
                            { min: 8, max: 50, message: t('min max', {field: 'Password', min: 8, max: 50}) }
                            ]}>
                            <PasswordInput />
                        </Form.Item>
                        <Form.Item className="password-input" name={['confirmPassword']} hasFeedback label="Confirm Password" validateTrigger={['onBlur']} rules={[
                            { required: true, message: t('required', {field: 'Confirm Password'}) },
                            { validator: validatePassword }
                            ]}>
                            <Input.Password type="password" placeholder="Password" />
                        </Form.Item>
                        {/* <Form.Item className="span-2">
                            <Checkbox>Receive promotional emails &amp; Updates</Checkbox>
                        </Form.Item> */}
                        <div className="span-2 center">
                            <Button className="primary full-width" htmlType="submit">Save &amp; Continue</Button>
                            <p className="mt-14">
                                By Signing Up you agree with the <strong><a>terms and conditions</a></strong> of Saloon Plus to Register with the platform
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
            <section className="mt-100">
                <div className="banner banner-3"></div>
            </section>
        </>
    )
}

Step1.propTypes = {
    onNext: PropTypes.func
}

export default Step1
