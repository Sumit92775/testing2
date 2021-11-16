import React from "react";
import YourRecheduledRequests from '../../components/Bookings/Your-Recheduled-Requests'
import SpRecheduleRequests from '../../components/Bookings/SP-Recheduled-Requests'

const RecheduleBookings = () =>{
    return(
        <>
            <div>
                <YourRecheduledRequests/>
            </div>
            <div className="mt-30">
                <SpRecheduleRequests />
            </div>
        </>
    )
}

export default RecheduleBookings;