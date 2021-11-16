import React, { Component, useEffect, useState } from 'react';
import { checkPaymentStatus } from '../services/payments';
// import queryString from 'querystring';
import axios from 'axios';
import { Button } from 'antd';
import router from 'next/router';
import PaymentSuccessful from '../components/Payments/paymentSuccessful';
import PaymentFailed from '../components/Payments/payment-failed';

const PaymentResult = (props) =>{

    console.log("Props: ",props);

    const [responseData, setResponseData] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        // let id = localStorage.getItem('checkoutId');
        // console.log("Id: ",id);
        try{

            checkPaymentStatus(props?.id).then(res =>{

                console.log("Response From Page: ",res);
                if(res?.status){
                    // if(res?.data){
                        setResponseData(true)
                        setLoading(false);
                    // }
                }else{
                    setResponseData(false);
                    setLoading(false);
                    console.log("error1: ");
                }
            }).catch(error =>{
                setResponseData(false);
                setLoading(false);
                console.log("error2: ");
            })
        }catch(error){
            setResponseData(false);
            setLoading(false);
            console.log("Error: ",error);
        }
    },[])

    const checkResult = () => {

        console.log("Response: ",responseData);

        // const successPattern = /^(000\.000\.|000\.100\.1|000\.[36])/;
        // const manuallPattern = /^(000\.400\.0[^3]|000\.400\.100)/;

        // const match1 = successPattern.test(responseData.result.code);
        // const match2 = manuallPattern.test(responseData.result.code);
        // console.log(match1, match2)
        if (responseData) {
            return (
                <div>
                    <PaymentSuccessful></PaymentSuccessful>
                </div>
            )

        } else {
            return (
                <div>
                    <PaymentFailed></PaymentFailed>
                </div>
            )
        }
    }


    return(
        <div>
            {loading === true ? 
             <div>
                <h1>Loading</h1>
            </div> 
            : 
            <div>
                {checkResult()}
            </div>
            }
        </div>
    )
}

export default PaymentResult;


PaymentResult.getInitialProps = async (data) => {
    const {id} = data.query
    return {id: id}
  }
