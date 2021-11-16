import { CardGiftcard, UserOutlined } from '@material-ui/icons';
import React from 'react';
import GiftCardDetails from './Gift-Card-Details'
import {Avatar, Button, Input} from 'antd';
import {Form} from 'antd';
import styles from '../../styles/components/GiftCards.module.scss'


const ShareGiftCardModal = () =>{
    return(
        <div className={styles['share-giftcard-modal-container']}>
            <GiftCardDetails></GiftCardDetails>
            <Form>
                <Form.Item label={<div className="pull-left">Email</div>}>
                    <div className="grid-view colgap-20" style={{gridTemplateColumns : "2fr 1fr"}}>
                        <Input className={styles['input']} placeholder="Enter Email Address"></Input>
                        <Button className="primary">Send Gift Card</Button>
                    </div>
                </Form.Item>
                <Form.Item className="mt-28" label={<div className="pull-left">Mobile</div>}>
                    <div className={styles['last-input']}>
                        <div style={{width : "fit-content"}}>
                            <Avatar></Avatar>
                        </div>
                        <Input className={styles['input']} placeholder="Enter Mobile Number"></Input>
                        <Button className="primary">Send Gift Card</Button>
                    </div>
                </Form.Item>
            </Form>
        </div>

    )
}

export default ShareGiftCardModal;
