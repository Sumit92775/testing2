import { Button } from 'antd';
import React from 'react'
import styles from './Success.module.scss';
import Link from 'next/link';

const Success = (props) => {
    return (
        <div className="content-wrapper table auto-width pl-20 pr-20 mb-100">
            <div className="card center mt-67">
                <p><span className={ styles['success-icon'] }></span></p>
                <h4 className="primary-txt mt-17">Registration Successful</h4>
                {/* <p>You’ve Successfully rsgistered with Saloon Plus, we’ve sent an email verification link to verify your email. Please verify your email to have complete control over your account</p> */}
                <Link href={ process.env.base_url + "login" } passHref={true}>
                    <Button className="primary mt-36" style={{maxWidth: '420px', width: '100%'}}>Login Now</Button> 
                </Link>
            </div>
        </div>
    )
}

export default Success
