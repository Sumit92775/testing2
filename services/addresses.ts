import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const access = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJ1c2VyTmFtZSI6IlN1bWl0aCIsImVtYWlsIjoiaGVsbG9AZ21haWwuY29tIiwicGhvbmVOdW1iZXIiOiI4MDc2ODM3MzIxIiwidXNlclR5cGUiOjIsImlhdCI6MTYzNDM2MzQyNH0.II6rLYaNLFYQDIQbNjQ4DY6NqETVVdWZct_ZByWuGQk'

export const getAccessToken = (req:any) => {
  
  console.log("Request: ",req);
  return req ? req.headers.cookie.split('; ').map((a:any) => {
      let arr = a.split('=');
      return {key: arr[0], val: arr[1]}
  }).find((a:any) => a.key == 'accessToken').val : ''
}

export const getAddresses = (req = null) =>{
  console.log(cookies.get('accessToken'));
    
    return fetch(`http://saloonplus.com:3004/api_v1/profile/user/getMyAddresslist`, {
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'authToken',
            accesstoken: req ? getAccessToken(req) : cookies.get('accessToken')
        }
    })
    .then(response => {
        const resp = response.json();
        console.log(resp)
        return resp
        // return response.json()
    })

  // console.log(cookies.get('accessToken'));
    
  //   console.log("Entered");
  //   var config = {
  //       method: 'GET',
  //       headers: { 
  //         'Authorization': 'authToken', 
  //         'Content-Type': 'application/json', 
  //         'accesstoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoicmlzaGFiaEBjeWJpZXJ0cm9zLmluIiwidXNlck5hbWUiOiJoYWNrcmlzaCIsInBob25lTnVtYmVyIjoiKzkxOTk5NzExMTcyMiIsInVzZXJUeXBlIjoyLCJlbWFpbFZlcmlmaWVkIjpmYWxzZSwicGhvbmVOdW1iZXJWZXJpZmllZCI6ZmFsc2UsImlhdCI6MTYzNDEyMzU4NH0.X0T19TT2wlPYFqLO9JX80ESckQNytK_yjZBinMl8skw'
  //       }
  //     };

  //     return fetch(`http://saloonplus.com:3004/api_v1/profile/user/getMyAddresslist`, config)
  //   .then(response => response.json());
}

export const addAddressUser = (object: any) =>{


  console.log("Address Added!! : name",object.name);
  console.log("Address Added!! : object",object);

  var data = JSON.stringify(object);

  var config = {
    method: 'POST',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    },
    body : data
  };

  return fetch(`http://saloonplus.com:3004/api_v1/profile/user/addAddress`, config)
      .then(response => {response.json();
      
      }).catch(error =>{
        console.log(error);
      });
    
}

export const editUserProfile = (req: any) =>{

  console.log("Req: "+req.firstName);
  console.log("Req: "+req.lastName);
  console.log("Req: "+req.gender);
  console.log("Req: "+req.dateOfBirth);
  
  var data = JSON.stringify(req);
  // var data = JSON.stringify({
  //   "firstName": req.firstName,
  //   "lastName": req.lastName,
  //   "gender": req.gender,
  //   "dateOfBirth": req.dateOfBirth
  // });

  var config = {
    method: 'PUT',
    // url: 'saloonplus.com:3004/editUserById',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    },
    body : data
  };


  return fetch(`http://saloonplus.com:3004/api_v1/profile/user/editProfile`, config)
    .then(response => response.json()).catch(error =>{
      console.log("Error in editingUserById: ",error);
    });

}

export const markAsDefault = (object:any) =>{
  // /api_v1/profile/user/markAddressDefault

  // var data = JSON.stringify({
  //   "addressId": 1
  // });

  console.log("Object: ",object);
  

  var data = JSON.stringify(object);
  
  var config = {
    method: 'PUT',
    // url: 'saloonplus.com:3004/api_v1/profile/user/markAddressDefault',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    },
    body : data
  };

  return fetch(`http://saloonplus.com:3004/api_v1/profile/user/markAddressDefault`, config)
    .then(response => response.json());

}

export const getMyDetails = () =>{
  
  var config = {
    method: 'GET',
    // url: 'saloonplus.com:3004/api_v1/profile/user/getMyDetails',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    }
  };


  return fetch(`http://saloonplus.com:3004/api_v1/profile/user/getMyDetails`, config)
  .then(response => 
    {return response.json()}
    ).catch(error =>{
    console.log("Error in gettinMyDetails: ",error);
  });

} 

export const getAdditionDetails = () =>{

  var config = {
    method: 'GET',
    // url: 'saloonplus.com:3004/api_v1/profile/user/getMyDetails',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    }
  };

  return fetch(`http://saloonplus.com:3004/api_v1/profile/user/getUserAddSettings`, config)
  .then(response => response.json()).catch(error =>{
    console.log("Error in gettinMyDetails: ",error);
  });

}

export const editAdditionDetails = (payload: any) =>{

  var data = JSON.stringify(payload);
  console.log("Payload: ", data);
  

  var config = {
    method: 'PUT',
    // url: 'saloonplus.com:3004/api_v1/profile/user/getMyDetails',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      'accesstoken': cookies.get('accessToken'),
    },
    body: data
  };

  return fetch(`http://saloonplus.com:3004/api_v1/profile/user/editUserAddSettings`, config)
  .then(response => response.json()).catch(error =>{
    console.log("Error in gettinMyDetails: ",error);
  });

}

export const deleteUserAddress = (addressId: any) =>{
  
  var data = '';
  var config = {
    method: 'delete',
    url: 'saloonplus.com:3004/api_v1/profile/user/deleteAddress?addressId=2',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get("accessToken")
    },
    body : data
  };

  return fetch(`http://saloonplus.com:3004/api_v1/profile/user/deleteAddress?addressId=${addressId}`, config)
  .then(response => {
    response.json();
  console.log("Response: ",response);
  
  }).catch(error =>{
    console.log("Error in deleting address: ",error);
  });

}