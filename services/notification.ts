import { message } from 'antd';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const getNotifications = (page: any) =>{
     
  var config = {
    method: 'GET',
    // url: 'saloonplus.com:3004/api_v1/profile/user/getMyDetails',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    }
  };


  return fetch(`http://saloonplus.com:3004/api_v1/profile/user/getUserNotification?page=1`, config)
  // return fetch(`http://saloonplus.com:8000/api_v1/store/public/getStoreByLocation/?location=test`, config)
  .then(response => {
    console.log("Response: ",response);
  return response.json(); 
  }).catch(error =>{
    message.error(error);
    // console.log("Error in Notifications Fetching: ",error);
  });
  
}

export const setNotificationRead = () =>{
     
  var config = {
    method: 'PUT',
    // url: 'saloonplus.com:3004/api_v1/profile/user/getMyDetails',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      'accesstoken': cookies.get('accessToken')
    }
  };

  return fetch(`http://saloonplus.com:3004/api_v1/profile/user/setUserNotificationRead`, config)
  .then(response => response.json()).catch(error =>{
    message.error(error);
    // console.log("Error in Notifications Fetching: ",error);
  });

}


// getUserAddSettings