import React from 'react';


const GiftCardDetails = () =>{
    return(
        <div className="card card2 pl-20 pt-12 txt mb-30" style={{border : "1px solid var(--primary-1)", backgroundColor : "#F8F8F8"}}>
            <div className="card-header">
                <h5 className="primary-txt mb-20">Gift Card Details</h5>
            </div>
            <div className="grid-view grid-2 colgap-14 rowgap-14 mb-10">
                <div>
                    <strong>Name</strong>
                    <p>Gift Card 1</p>
                </div>
                
                <div>
                    <strong>Code</strong>
                    <p>SP 22AW-L8CT-20</p>
                </div>
            </div>
            
            <div className="grid-view grid-2 colgap-14"  style={{borderBottom : "0px solid red !important"}}>
                <div style={{borderBottom : "none !important"}}>
                    <strong>Balance</strong>
                    <p>$100.00</p>
                </div>
                <div>
                    <strong>Store Name</strong>
                    <p>Halais</p>
                </div>
            </div>
            <div className="mt-32">
                <strong className="full-width">Description</strong>
                <p>A short Description about the gift card goes here for getting an initial idea.</p>
            </div>
        </div>
    )
}

export default GiftCardDetails;