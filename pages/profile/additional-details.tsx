import React, { useEffect, useState } from 'react';
import styles from '../../styles/components/Card-Template.module.scss'
import EditIcon from '@material-ui/icons/Edit';
import {Form, Select, Input, Slider, Divider, Button, Checkbox, Modal, Radio, message} from 'antd';
import astyles from './Styles.module.scss'
import { editAdditionDetails, editUserProfile } from '../../services/addresses';
import EditGeneralDetails from './edit-general-details';
import { Option } from 'rc-select';
import cx from 'classnames';

const AdditionalDetails = (props : any) =>{

    const [chooseModal, setchooseModal] = useState(false);
    const [timezone, setTimeZone] = useState("");
    const [dateformat, setDateFormat] = useState("");
    const [chooseemailorsms, setChooseEmailOrSms] = useState('1');
    const [value, setValue] = useState(1);


    useEffect(() =>{
        setTimeZone(props?.details?.timeZone);
        setDateFormat(props?.details?.dateFormat);
        // setChooseEmailOrSms(props?.details?.EmailNotify === 0 ? 0 : 1);
    },[props?.details?.timeZone, props?.details?.dateFormat])

    
    ////// Handler
    
    const handelEditAdditionSettings = () =>{
        console.log(timezone+" "+dateformat+" "+chooseemailorsms);
        editAdditionDetails({
            "dateFormat": dateformat,
            "timeZone": timezone,
            "EmailNotify": chooseemailorsms === '1' ? '1' : '0',
            "smsNotify": chooseemailorsms === '2' ? '1' : '0',

        }).then(res =>{
            if(res?.status == true){
                message.success(res.message);
                setchooseModal(false);
                setDateFormat("");
                setTimeZone("");
                setChooseEmailOrSms('1');

                console.log(props?.details?.updatedAt);
                
                // props.resetUI({
                //     "dateFormat": dateformat,
                //     "timeZone": timezone,
                //     "EmailNotify": chooseemailorsms === "1" ? '1' : '0',
                //     "smsNotify": chooseemailorsms === "2" ? '1' : '0',
                // })
                props.setAdditionDetailsObject({
                    "dateFormat": dateformat,
                    "timeZone": timezone,
                    "EmailNotify": chooseemailorsms === '1' ? 1 : 0,
                    "smsNotify": chooseemailorsms === '2' ? 1 : 0,
                    "updatedAt" : props?.details?.updatedAt
                });
            }else{
                message.error(res.message);
            }
        }).catch(error =>{
            message.error(error);
        })

    }
    
    
    ////// MODAL UTILITIES

    const handleOk = (evt : any) => {
        console.log('ok clicked', evt)
    };

    const handleCancel = () => {
        setchooseModal(false);
    };

    const openModal = (type : any) => {
        setchooseModal(true);
    };

    ////// INSIDE MODAL 


    const onChange = (e: any) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
      setChooseEmailOrSms(e.target.value);
    };

    return(
        <div className={cx(styles['card-no-shadow'], "card card2 p-0 mt-40")} style={{height : "fit-content", position : "relative", boxShadow : "none"}}>
            <div className={styles['card-header-container']}>
                <h5 className="mt-10 mb-10 pl-20 pr-27 fz-18">{"Additional Preferences"}</h5>
                <Divider className="mt-5 mb-0"></Divider>
            </div>
        
        <main>
            <div className="pt-10 pl-27 pr-37">
                <div className={astyles['anpa-container-content']}>
                <div className={astyles['main-content-container']}>
                            <div>
                                <strong>{"Timezone"}</strong>
                                <span>{props?.details?.timeZone}</span>
                                {/* <span>{props?.itemList.firstName}</span> */}
                            </div>
                            
                            <div>
                                <strong>{"Date Format"}</strong>
                                <span>{props?.details?.dateFormat}</span>
                                {/* <span>{props?.itemList.lastName}</span> */}
                            </div>
                            
                            <div>
                                <strong>{"Notification Preference"}</strong>
                                <span>{props?.details?.smsNotify === 1 ? "SMS" : "EMAIL"}</span>
                                {/* <span>{props?.itemList.userName}</span> */}
                            </div>
              
                            <div>
                                <strong>{"Last Active"}</strong>
                                <span>{props?.details?.updatedAt}</span>
                                {/* <span>{props?.itemList.email}</span> */}
                            </div>

                    </div>
                </div>
            </div>

        </main>

        <Divider className="mt-12 mb-12"></Divider>
        <div className={styles['bottom-btn-container']}>
        <div>
            <Button className="primary small mr-33" type="link" onClick={openModal}><span className="icon-wrap" onClick={() =>openModal("Edit Addition Settings")}><EditIcon /></span>Edit Details</Button>
        </div>
    </div>

        <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                    <div style={{width : "100%", 
                    height: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    alignItems: "center"}}>
                        <h4 className="txt primary">{"Edit Additional Details"}</h4>
                    </div>
            } footer={
                <div className="pt-20 pb-20 pr-0">
                    <Button className="mr-20" onClick={handleCancel}>Cancel</Button>
                    <Button className="ant-btn primary mr-21" onClick={handelEditAdditionSettings}>Save Chages</Button>
                </div>
                }
            visible={chooseModal} onOk={handleOk} onCancel={handleCancel}>
                {
                    <Form>
                        <Form.Item>
                            <div className="grid-view grid-2 colgap-20">
                                <Form.Item className="mb-15" label="Timezone">
                                    <Select value={timezone} onSelect={(event) => {setTimeZone(`${event}`);
                                console.log("Timezone: ",event);
                                }}>
                                        <Option value="IST">IST</Option>
                                        <Option value="EST">EST</Option>
                                        <Option value="EDT">EDT</Option>
                                        <Option value="CEST">CEST</Option>
                                    </Select>
                                </Form.Item>
                        
                                <Form.Item className="mb-15" label="Date Format">
                                    <Select value={dateformat} onSelect={(event) => {setDateFormat(`${event}`);
                                console.log("Dateformat:",event);
                                }}>
                                        <Option value="YYYY-MM-DD">YYYY-MM-DD</Option>
                                        <Option value="MM-DD-YYYY">MM-DD-YYYY</Option>
                                        <Option value="DD-MM-YYYY">DD-MM-YYYY</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </Form.Item>
                        
                        
                        <Form.Item className="mb-15 mt-20" label="Set Notification Preferences">
                            
                            <Radio.Group defaultValue={chooseemailorsms} onChange={onChange} value={value}>
                                <Radio value={'1'}>EMAIL</Radio>
                                <Radio value={'2'}>SMS</Radio>
                            </Radio.Group>

                        </Form.Item>
                    </Form>
                }
        </Modal>
    </div>

    
    )

}
export default AdditionalDetails;


