import Cookies from "universal-cookie";
const cookies = new Cookies();

export const getGiftCards = (page: any) =>{
  var config = {
      method: 'GET',
      headers: { 
        'Authorization': 'authToken', 
      }
    };
      
  return fetch(`http://saloonplus.com:9010/api_v1/coupan/giftcard/getGiftCard?&page=${page}`, config)
      .then(response => {
      return response.json();
      }).catch(error =>{
      console.log(error);
      });
}

export const getGiftCardsByStoreId = (storeId: any) =>{
    var config = {
        method: 'GET',
        headers: { 
          'Authorization': 'authToken', 
        }
      };
      
    return fetch(`http://saloonplus.com:9010/api_v1/coupan/giftcard/getGiftCard?storeId=${storeId}&page=1`, config)
        .then(response => {
        return response.json();
        }).catch(error =>{
        console.log(error);
        });
}

export const buyGiftCard = (cartId: any) =>{

  console.log("CartId1",cartId);

  var config = {
    method: 'POST',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    },
  };

  return fetch(`http://saloonplus.com:9010/api_v1/coupan/giftcard/generateGiftCard?giftcardId=1`, config)
      .then(response => {
        return response.json();
      
      }).catch(error =>{
        console.log(error);
      });
    
}

export const getMyGiftCards = (page: any) =>{
  // console.log("CartId1",cartId);

  var config = {
    method: 'GET',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    },
  };

  return fetch(`http://saloonplus.com:9010/api_v1/coupan/giftcard/getMyGiftCard?page=${page}`, config)
      .then(response => {
        return response.json();
      
      }).catch(error =>{
        console.log(error);
      });
    
}

export const getMyExpiredGiftCards = (page: any, ) =>{
  // console.log("CartId1",cartId);

  var config = {
    method: 'GET',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    },
  };

  return fetch(`http://saloonplus.com:9010/api_v1/coupan/giftcard/getMyGiftCard?page=${page}&expired=1`, config)
      .then(response => {
        return response.json();
      
      }).catch(error =>{
        return error;
        // console.log(error);
      });
    
}

