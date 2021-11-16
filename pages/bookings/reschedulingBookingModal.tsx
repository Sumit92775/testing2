import React from 'react';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
import moment from 'moment';

const ReschedulingBookingRequest = (props: any) =>{

    
 function onChange(value: any, dateString: any) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    props?.reschedulingDate(dateString)
  }
  
  function onOk(value: any) {
    console.log('onOk: ', value);
    let time = moment(value).format(`${process.env.time_format}`);
    let date = moment(value).format(`${process.env.date_format}`);
    console.log("Time: ", time);
    console.log("Date: ", date);
  }

//   function disableDateRanges(range = { startDate: false, endDate: false }) {
//     const { startDate, endDate } = range;
//     return function disabledDate(current: any) {
//       let startCheck = true;
//       let endCheck = true;
//       if (startDate) {
//         startCheck = current && current < moment(startDate, 'YYYY-MM-DD');
//       }
//       if (endDate) {
//         endCheck = current && current > moment(endDate, 'YYYY-MM-DD');
//       }
//       return (startDate && startCheck) || (endDate && endCheck);
//     };
//   }

    return(
        <div>
            {
            props?.reschedulingDetails?.reschedulingObject.type === 'free' ? 
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <strong>{`Choose new date and time for your booking.`}</strong>
                {/* <DatePicker disabledDate = {disableDateRanges({startDate:new Date()}) } className="mt-10" style={{width: "250px", height : "50px"}} showTime onChange={onChange} onOk={onOk} /> */}
                <DatePicker className="mt-10" style={{width: "250px", height : "50px"}} showTime onChange={onChange} onOk={onOk} />
            </div>
            : 
            props?.reschedulingDetails?.reschedulingObject.type === 'paid' ? 
            <div>
                <strong>{`A reschedule fee of $${props?.reschedulingDetails?.reschedulingObject?.rescheduleFee} is applicable for theis request as per the store's policies.`}</strong><br/>
                <strong>{`Choose new date and time for your booking.`}</strong>
                <RangePicker style={{width : "250px", height : "43px"}}/>
            </div>
            : 
            <>
            </>
            
            }
        </div>
    )
}

export default ReschedulingBookingRequest;