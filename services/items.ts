import Cookies from "universal-cookie";
const cookies = new Cookies();

export const getStoreByStoreId = (storeId: any) =>{
    
var config = {
    method: 'GET',
    // url: 'saloonplus.com:8000/api_v1/store/public/getStoreByStoreId?storeId=1&&',
    headers: { 
      accesstoken: cookies.get('accessToken'), 
      'Content-Type': 'application/json', 
      'Authorization': 'authToken'
    }
  };

  return fetch(`http://saloonplus.com:8000/api_v1/store/public/getStoreByStoreId?storeId=${storeId}&&`, config)
  .then(response => {
      return response.json();
  }).catch(error =>{
    console.log(error);
  });
  
}

export const getServicesListByStoreId = (storeId: any) =>{
    
    var config = {
        method: 'GET',
        // url: 'saloonplus.com:8000/api_v1/store/public/getServiceListByStoreId?storeId=1',
        headers: { 
          'Authorization': 'authToken', 
          'Content-Type': 'application/json'
        }
      };
      
  return fetch(`http://saloonplus.com:8000/api_v1/store/public/getServiceListByStoreId?storeId=${storeId}`, config)
  .then(response => {
      return response.json();

  }).catch(error =>{
    console.log(error);
  });
  
}

export const addToCart = (object: any) =>{
  
  console.log("Object: ",object);

  var data = JSON.stringify({
    "variationId": object.itemid,
    "qty": 1,
    "keys": object.keyArray,
    "values": object.serviceValue
  });

  var config = {
    method: 'POST',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      'accesstoken': cookies.get('accessToken')
    },
    body : data
  };

  return fetch(`http://saloonplus.com:6001/api_v1/cart/addItemsInCart`, config)
  .then(response => {
      return response.json();
  }).catch(error =>{
    console.log(error);
  });

}

export const getItemInCart = () =>{
    
  var config = {
    method: 'GET',
    // url: 'saloonplus.com:6001/api_v1/cart/getMyItemsInCart',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      'accesstoken': cookies.get('accessToken')
    }
  };
      
  return fetch(`http://saloonplus.com:6001/api_v1/cart/getMyItemsInCart`, config)
  .then(response => {
      return response.json();

  }).catch(error =>{
    console.log(error);
    return error;
  });

}

export const deleteFromCart = (itemId: any) =>{
  
  var config = {
    method: 'DELETE',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      'accesstoken': cookies.get('accessToken')
    },
  };

  return fetch(`http://saloonplus.com:6001/api_v1/cart/deleteItemsInCart?id=${itemId}`, config)
  .then(response => {
      return response.json();
  }).catch(error =>{
    console.log(error);
  });

}

export const emptyCartAfterShopping = () =>{
  
var data = '';

var config = {
  method: 'DELETE',
  headers: { 
    'Authorization': 'authToken', 
    'Content-Type': 'application/json', 
    accesstoken: cookies.get('accessToken')
  },
  body : data
};

return fetch(`http://saloonplus.com:6001/api_v1/cart/emptyCart`, config)
.then(response => {
    return response.json();
}).catch(error =>{
  console.log(error);
});

}

export const editCartItem = (object: any) =>{
  
  var data = JSON.stringify({
    "keys": object.keys,
    "values": object.value,
    "qty": object.qty
  });
  

  var config = {
    method: 'put',
    url: 'saloonplus.com:6001/api_v1/cart/editItemsInCart?id=9',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      'accesstoken': cookies.get("accessToken")
    },
    body : data
  };

  return fetch(`http://saloonplus.com:6001/api_v1/cart/editItemsInCart?id=${object.id}`, config)
  .then(response => {
      return response.json();

  }).catch(error =>{
    console.log(error);
  });
}

export const myOrders = (object: any) =>{
  
  var data = JSON.stringify({
    "storeId": 1,
    "currencyId": 1,
    "paymentType": 1,
    "orderPriceWithoutPlatformChargesOrTaxes": 129,
    "PlatformCharges": 129,
    "taxes": 20,
    "totalOrderPrice": object.price,
    "BookingTime": "2021-11-20 19:24:19",
    "giftCardID": [
      "GiftCard-Number1",
      "GiftCard-Number2"
    ],
    "Services": object.services,
  });
  
  var config = {
    method: 'POST',
    // url: 'saloonplus.com:6001/api_v1/order/newOrder',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken')
    },
    body : data
  };

  return fetch(`http://saloonplus.com:6001/api_v1/order/newOrder`, config)
  .then(response => {
      return response.json();

  }).catch(error =>{
    console.log(error);
  });

}

// /api_v1/order/newOrder