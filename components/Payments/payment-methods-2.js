import React from 'react';
import AddNewPayoutAccount from './AddNewPayoutAccount';
import styles from '../../styles/components/Payment-Methods-2.module.scss'
const PaymentMethods2 = () =>{

    return(
        <div className="">
            <span><span className="material-icons">arrow_back_ios</span>Go Back</span>  
            <div className={styles['pmtwo-div-container']}>
                <div>
                    <AddNewPayoutAccount></AddNewPayoutAccount>
                </div>
            </div>          
        </div>

    )
}

export default PaymentMethods2;