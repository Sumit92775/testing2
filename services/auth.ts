import React  from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();
let lastId = 0;

const options = {
    method: 'POST',
    headers: { 
        'content-type': 'application/json',
        'Authorization': 'authToken',
    },
    body: ''
}

const access = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJ1c2VyTmFtZSI6IlN1bWl0aCIsImVtYWlsIjoiaGVsbG9AZ21haWwuY29tIiwicGhvbmVOdW1iZXIiOiI4MDc2ODM3MzIxIiwidXNlclR5cGUiOjIsImlhdCI6MTYzNDM2MzQyNH0.II6rLYaNLFYQDIQbNjQ4DY6NqETVVdWZct_ZByWuGQk'


export const login = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    return fetch(`http://saloonplus.com:3004/api_v1/profile/user/login`, _options)
    .then(response => response.json());
}


export const signup = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`http://saloonplus.com:3004/api_v1/profile/user/addUser`, _options)
    .then(response => response.json())
}

export const sendPhoneOTP = (payload:object) => {
    var data = JSON.stringify(payload);
      
      var config = {
        method: 'POST',
        // url: 'saloonplus.com:3004/api_v1/profile/authentication/sendEmailOTP',
        headers: { 
          'Authorization': 'authToken', 
          'Content-Type': 'application/json'
        },
        body : data
      };
      

    return fetch(`http://saloonplus.com:3004/api_v1/profile/authentication/sendPhoneOTP`, config)
    .then(response => response.json())
}

export const sendEmailOTP = (payload:object) => {
    var data = JSON.stringify(payload);
      
      var config = {
        method: 'POST',
        // url: 'saloonplus.com:3004/api_v1/profile/authentication/sendEmailOTP',
        headers: { 
          'Authorization': 'authToken', 
          'Content-Type': 'application/json'
        },
        body : data
      };
      

    return fetch(`http://saloonplus.com:3004/api_v1/profile/authentication/sendEmailOTP`, config)
    .then(response => response.json())
}

export const verifyOTP = (payload:object) => {
    const options = {
        method: 'POST',
        headers: { 
            'content-type': 'application/json',
            'Authorization': 'authToken',
            accesstoken: cookies.get('accessToken'),
        },
        body: JSON.stringify(payload)
    }
    
    return fetch(`http://saloonplus.com:3004/api_v1/profile/user/addPhoneNumberToAccount`, options as RequestInit)
    .then(response => response.json())
}

export const verifyEmailOTP = (payload:object) => {
    const options = {
        method: 'POST',
        headers: { 
            'content-type': 'application/json',
            'Authorization': 'authToken',
            'accesstoken': cookies.get('accessToken')
        },
        body: JSON.stringify(payload)
    }
    
    return fetch(`http://saloonplus.com:3004/api_v1/profile/user/addEmailToAccount`, options as RequestInit)
    .then(response => response.json())
}

export const verifyPhoneOTP = (payload:object) => {
    const options = {
        method: 'POST',
        headers: { 
            'content-type': 'application/json',
            'Authorization': 'authToken',
            'accesstoken': cookies.get("accessToken")
        },
        body: JSON.stringify(payload)
    }
    
    return fetch(`http://saloonplus.com:3004/api_v1/profile/user/addPhoneNumberToAccount`, options as RequestInit)
    .then(response => response.json())
}



export const validateEmail = (payload:object) => {
    
  var data = JSON.stringify(payload);
      
      var config = {
        method: 'POST',
        // url: 'saloonplus.com:3004/api_v1/profile/user/emailAvailability',
        headers: { 
          'Authorization': 'authToken', 
          'Content-Type': 'application/json'
        },
        body : data
      };

    return fetch(`http://saloonplus.com:3004/api_v1/profile/user/emailAvailability`, config)
    .then(response => response.json())
}

export const validateUserName = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`http://saloonplus.com:3004/api_v1/profile/user/userNameAvailability`, _options)
    .then(response => response.json())
}

export const validatePhoneNumber = (payload:object) => {
    var data = JSON.stringify(payload);
      
    var config = {
      method: 'POST',
      // url: 'saloonplus.com:3004/api_v1/profile/user/emailAvailability',
      headers: { 
        'Authorization': 'authToken', 
        'Content-Type': 'application/json'
      },
      body : data
    };

  return fetch(`http://saloonplus.com:3004/api_v1/profile/user/phoneNumberAvailability`, config)
  .then(response => response.json())
}

export const changePasswordWithOTP = (payload:object) => {
    let _options = {...options, body: JSON.stringify(payload)}
    
    return fetch(`http://saloonplus.com:3004/api_v1/profile/user/changePasswordWithOTP`, _options)
    .then(response => response.json())
}

export const changePassword = (payload: object) =>{

    var data = JSON.stringify(payload);
 

    var config = {
        method: 'POST',
        headers: { 
          'Authorization': 'authToken', 
          'accesstoken': cookies.get('accessToken'),
          'Content-Type': 'application/json'
        },
        body : data
      };

      return fetch(`http://saloonplus.com:3004/api_v1/profile/user/changePassword`, config)
    .then(response => {response.json();
  
     
    }).catch(error =>{
      console.log(error);
    });

}

export const newId = (prefix: string = '') => {
  return `${prefix}${++lastId}`;
}
