import React from 'react';
import UserBnkDetails from '../user-bnk-details';

const PaymentMethod = () =>{
    return(
        <div className="card card2 pt-24 pl-34 pr-80">
            <h5>Payment Method</h5>
            <div className="card card2 mt-12 pl-43 pr-62">
                <UserBnkDetails productDetails={true}></UserBnkDetails>
            </div>
        </div>
    )
}

export default PaymentMethod;