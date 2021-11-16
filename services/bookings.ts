import Cookies from "universal-cookie";
const cookies = new Cookies();

export const bookings = (object: any) =>{
var config = {
    method: 'GET',
    // url: 'saloonplus.com:6001/api_v1/order/getMyBookings?type=1',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    }
  };

  
  return fetch(`http://saloonplus.com:6001/api_v1/order/getMyBookings?type=${object.type}&page=${object.page}`, config)
      .then(response => {
        return response.json();
      }).catch(error =>{
        console.log(error);
      });
}

export const cancelBookingRequest = (cancelBookingId: any) =>{
var config = {
    method: 'GET',
    // url: 'saloonplus.com:6001/api_v1/order/getMyBookings?type=1',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    }
  };

  
  return fetch(`http://saloonplus.com:6001/api_v1/order/getBookingCancellationDetails?bookingId=${cancelBookingId}`, config)
      .then(response => {
        return response.json();
      }).catch(error =>{
        console.log(error);
      });

}


export const confirmBookingCancel = (cancelBookingId: any) =>{
var config = {
    method: 'GET',
    // url: 'saloonplus.com:6001/api_v1/order/getMyBookings?type=1',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    }
  };

  
  return fetch(`http://saloonplus.com:6001/api_v1/order/cancelBooking?bookingId=${cancelBookingId}`, config)
      .then(response => {
        return response.json();
      }).catch(error =>{
        console.log(error);
      });

}


export const reschedulingBookingRequest = (reschedulingBookingId: any) =>{
  var config = {
      method: 'GET',
      // url: 'saloonplus.com:6001/api_v1/order/getMyBookings?type=1',
      headers: { 
        'Authorization': 'authToken', 
        'Content-Type': 'application/json', 
        accesstoken: cookies.get('accessToken')
      }
    };
  
    
    return fetch(`http://saloonplus.com:6001/api_v1/order/getBookingRescheduleDetails?bookingId=${reschedulingBookingId}`, config)
        .then(response => {
          return response.json();
        }).catch(error =>{
          console.log(error);
        });
  
}

export const confirmRescheduleBooking = (object: any) =>{
 
  var data = JSON.stringify({
    "newbookingTime": object.newBookingTime,
    "rescheduleComment": object.comment
  });

  var config = {
      method: 'POST',
      headers: { 
        'Authorization': 'authToken', 
        'Content-Type': 'application/json', 
        accesstoken: cookies.get('accessToken')
      },
      body: data
    };
  
    
    return fetch(`http://saloonplus.com:6001/api_v1/order/rescheduleBookingRequest?bookingId=${object.rescheduleId}`, config)
        .then(response => {
          return response.json();
        }).catch(error =>{
          console.log(error);
        });
  
}


// saloonplus.com:6001/api_v1/order/recheduleBookingRequest?bookingId=1