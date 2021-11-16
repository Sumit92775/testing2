import React, { Component } from 'react';
import axios from 'axios';
class CheckoutPage extends Component {
    state = {
        checkoutId: null,
        loading: true
    }
    componentDidMount() {

        var data = JSON.stringify( {   
            currency:"SAR",
            amount:200
        });
        
        // data = JSON.stringify(data);
    
      
        var config = {
          method: 'POST',
          headers: { 
            'Authorization': 'authToken', 
            'Content-Type': 'application/json', 
            accesstoken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJ1c2VyTmFtZSI6IlN1bWl0LnRlc3Q3IiwiZW1haWwiOiJTdW1pdC50ZXN0N0BnbWFpbC5jb20iLCJwaG9uZU51bWJlciI6IjkzNDgzMjgyODciLCJ1c2VyVHlwZSI6MSwidG9rZW5UeXBlIjoiVXNlciIsImlhdCI6MTYzNjQ0NjA4Nn0.6UpmgZuScZwAoWkALHrNKr1E53f8Y_jFxoYehytDgC0' 
          },
          body: data
        };
      
        fetch(`http://saloonplus.com:13690/api_v1/payment/initializePayment`, config)
            .then(response => {
                console.log("Response: ",response.json());
                this.setState({
                    checkoutId: '84588884C6624D97D70E2449709BD7B8.uat01-vm-tx03',
                    loading: false
                })
            
            }).catch(error =>{
              console.log(error);
            });
      

        // axios.post("https://saloonplus.com:13690/api_v1/payment/initializePayment", ).then(res => {
        //     this.setState({
        //         checkoutId: res.data.id,
        //         loading: false
        //     })
        // })
    }
    renderPaymentform = () => {
        console.log('Loading ')
        const script = document.createElement("script");

        script.src = `https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${this.state.checkoutId}`;
        script.async = true;

        document.body.appendChild(script);

        const form = document.createElement("form")
        form.action = "http://localhost:3000/result";
        form.setAttribute("class", "paymentWidgets");
        form.setAttribute("data-brands", "VISA MASTER AMEX")
        document.body.appendChild(form);
    }
    render() {
        if (!this.state.loading) {
            return (
                <div >
                    {this.renderPaymentform()}
                </div>
            );
        } else {
            return (
                <div> Still Loading</div>
            )
        }
    }
}

export default CheckoutPage;