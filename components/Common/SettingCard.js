import {Form, Select, Input, Slider, Divider, Button, Checkbox} from 'antd';
// import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Option } from 'antd/lib/mentions';
import React from 'react';
import styles from './SettingCard.module.scss'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { css } from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const SettingCard = (props) =>{

    console.log(props.cardDetails.content);
    console.log(props.modal);

   const OpenModal = () =>{
        props.modal(props.modalName);
    }

    return(
        <div className="card card2 p-0" style={{height : "fit-content", position : "relative", boxShadow : "none"}}>
            <div className={styles['card-header-container']}>
                <h5 className="mt-10 mb-10 pl-27 pr-27 fz-18">{props.cardDetails.title}</h5>
                <Divider className="mt-5 mb-0"></Divider>
            </div>
            
            <div className="pt-20 pl-27 pr-37">
                <div className={styles['anpa-container-content']}>
                    {
                        props.cardDetails.content.map((obj) =>{
                            return(
                                <div key={obj}>
                                    <strong>{obj[0]}</strong>
                                    <span>{obj[1]}</span>
                                </div>
                            )
                        })
                    }
        </div>

            </div>

            <Divider className="mt-12 mb-12"></Divider>
            <div className={styles['bottom-btn-container']}>
            <div>
                <Button className="primary small mr-33" type="link" onClick={() =>OpenModal()}><span className="icon-wrap"><EditIcon /></span>Edit Details</Button>
            </div>
        </div>
        </div>
    )
}

export default SettingCard;