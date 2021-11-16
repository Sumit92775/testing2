import React, {useState} from 'react'
import Cancellations from '../../components/Bookings/Cancellations';
import AutoRejections from '../../components/Bookings/AutoRejections';
import Rejections from '../../components/Bookings/Rejections';

const RejectedBookings = () => {

    return (
        <>
            <div>
                <Cancellations />
            </div>
            <div className="mt-30">
                <Rejections />
            </div>
            <div className="mt-30">
                <AutoRejections />
            </div>
        </>
    )
}

export default RejectedBookings;
