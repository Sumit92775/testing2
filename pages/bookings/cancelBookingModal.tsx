import React, { useEffect } from "react";
const CancelBookingsModal = (props: any) =>{
    


    return(
        <div>
            <p> <strong>You paid <span className="txt success">{props?.cancelbookingDetails?.paidAmount}</span> for booking {props?.cancelbookingDetails?.booking} from {props?.cancelbookingDetails?.storeName}.
                Total Refundable Amount as per their Policies is: <span className="txt danger"> {props?.cancelbookingDetails?.refundAmount}</span>.
                <br/>
                Are you sure you want to cancel the booking?</strong></p>
        </div>
    )
}
export default CancelBookingsModal;