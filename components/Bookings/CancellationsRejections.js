import React, {useState} from 'react'
import Cancellations from './Cancellations';
import Rejections from './Rejections';
import AutoRejections from './AutoRejections';

const ConfirmedBookings = () => {

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

export default ConfirmedBookings
