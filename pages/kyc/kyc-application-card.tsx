import {Button, Form, Input} from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react';
import styles from '../../styles/components/Kyc-Application-Card.module.scss'

const KycApplicationCard = () =>{
    return(
        <div className={styles['kyc-application-container']}>
            <Form>
                <Form.Item className="mt-30">
                    <div className={styles['form-grid-container']}>
                        <Form.Item label="First Name">
                            <Input></Input>
                        </Form.Item>
                       
                        <Form.Item label="Last Name">
                            <Input></Input>
                        </Form.Item>
                    </div>
                   
                    <div className={styles['form-grid-container']}>
                        <Form.Item label="Address line 1">
                            <Input placeholder="Address line 1"></Input>
                        </Form.Item>
                       
                        <Form.Item label="Address line 2">
                            <Input placeholder="Address line 2"></Input>
                        </Form.Item>
                    </div>

                    <div className={styles['form-grid-container']}>
                        <Form.Item label="Address line 3">
                            <Input placeholder="Address line 3" style={{width : "46% !important"}}></Input>
                        </Form.Item>
                    </div>


                </Form.Item>
                <Form.Item>
                    <div className={styles['btn-container']}>
                        <Button className="txt primary mt-36">Generate KYC Code</Button>
                        <Button className="txt primary mt-36 mb-36" style={{backgroundColor : "var(--green-4)", color : "var(--green-1)"}}>Your KYC code is ‘254112’</Button>
                    </div>
                </Form.Item>   

                <Form.Item>
                    <div className={styles['upload-document-container']}>
                        <div className={styles['udc-t']}>
                            <div className={styles['img-container']}>
                                <div className={styles['img1']} ></div>
                                <div className={styles['txt1']}>
                                   <span><span className="material-icons mr-6">done</span>Your face is not clearly visible</span>
                                </div>
                            </div>
                            <div className={styles['img-container']}>
                                <div className={styles['img2']}></div>
                                <div className={styles['txt2']}>
                                    <div className={styles['icon']}>
                                        <span className="material-icons mr-6">done</span>
                                    </div>
                                    <div className={styles['txt']}>
                                        <span>A clear image of you Holding ID proof along with the secret code generated</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['img-container']}>
                                <div className={styles['img3']}></div>
                                <div className={styles['txt3']}>
                                    <div>
                                        <span><span className="material-icons mr-6">done</span>Your face is not clearly visible</span>
                                    </div>
                                    <div>
                                        <span><span className="material-icons mr-6">done</span>Your face is not clearly visible</span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className={styles['udc-b']}>
                            <div className={styles['udc-b-content']}>
                                <h6 className="txt primary auto-width mt-50">Upload an image of you holding the ID proof and secret code.</h6>
                                <div className="mt-20" style={{display : 'flex', width : "480px", minWidth : "200px", height : "50px", alignItems : "center",justifyContent : "center", border : "2px dashed gray", borderRadius : "6px"}}>
                                    {/* <div> */}
                                        <span className="material-icons">add</span>
                                        <span className="auto-width">Upload Image</span>
                                    {/* </div> */}
                                </div>
                                <p className="mt-19 mb-30">Supported file formats are <strong>JPEG, JPG,PNG, GIF.</strong><br></br>
                                    Product images are usually <strong>200 * 200</strong> with file size upto <strong>5MB</strong></p>
                            </div>
                        </div>
                    </div>
                </Form.Item> 

                <Form.Item>
                    <div className={styles['check-btn-container']}>
                        <Checkbox>Im the signing authority for this business</Checkbox>
                        <div className="mt-20" style={{display : 'flex', minWidth : "200px", height : "50px", alignItems : "center",justifyContent : "center", border : "2px dashed gray", borderRadius : "6px"}}>
                            <span className="material-icons">add</span>
                            <span className="auto-width">Upload Image</span>
                        </div>
                    </div>
                </Form.Item>
                <Form.Item>
                    <Button className="txt primary full-width mt-47">Submit for KYC Verification</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default KycApplicationCard;