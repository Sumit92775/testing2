import { Button } from 'antd';
import router from 'next/router';
import React from 'react';
import styles from '../../styles/components/Payment.module.scss'

const PaymentFailed = () =>{
    return(
        <div className={styles['psp-container']}>
            <h1 className="txt danger">Payment Failed!!</h1>
            <Button className="txt primary mt-20" onClick={() =>{router.push(`${process.env.base_url}payments/wallet`)}}>Back to wallet</Button>
        </div>
    )   
}
export default PaymentFailed;