import Cookies from "universal-cookie";
const cookies = new Cookies();
export const getCustomerId = (object: any) =>{

    var data = JSON.stringify(object);
    
    var config = {
      method: 'POST',
      headers: { 
        'Authorization': 'authToken', 
        'Content-Type': 'application/json', 
        accesstoken: cookies.get('accessToken') 
      },
      body: data
    };
  
    return fetch(`http://saloonplus.com:13690/api_v1/payment/initializePayment`, config)
        .then(response => {
          return response.json();
        
        }).catch(error =>{
          console.log(error);
        });
      
  }
  

export const checkPaymentStatus = (id: any) =>{

  let data = JSON.stringify({   
    "checkOutId":""+id
  })


var config = {
    method: 'POST',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken'),
    },
    body: data
  };

  return fetch(`http://saloonplus.com:13690/api_v1/payment/walletTopUp`, config)
      .then(res => {
        console.log("Response From Payment Service: ",res)
        return res.json();
        // this.setState({
        //     responseData: res.data,
        //     loading: false
        // })
      }).catch(error =>{
        console.log(error);
        return error;
      });

}

export const getTransactionHistory = () =>{

var config = {
    method: 'GET',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken'),
    }
  };

  return fetch(`http://saloonplus.com:13690/api_v1/wallet/getTransactionHistory`, config)
      .then(res => {
        console.log("Response From Payment Service: ",res)
        return res.json();
      }).catch(error =>{
        console.log(error);
        // return error;
      });
}

export const getTransactionHistoryByData = (date: any) =>{

var config = {
    method: 'GET',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken'),
    }
  };

  return fetch(`http://saloonplus.com:13690/api_v1/wallet/getTransactionHistory?txnId=&toDate=${date}&fromDate=${date}&page&column=&parameter`, config)
      .then(res => {
        console.log("Response From Payment Service: ",res)
        return res.json();
      }).catch(error =>{
        // console.log(error);
        return error;
      });
}


export const getMyBalance = () =>{

var config = {
    method: 'GET',
    headers: { 
      'Authorization': 'authToken', 
      'Content-Type': 'application/json', 
      accesstoken: cookies.get('accessToken'),
    }
  };

  return fetch(`http://saloonplus.com:13690/api_v1/wallet/getBalance`, config)
      .then(res => {
        console.log("Response From Payment Service: ",res)
        return res.json();
      }).catch(error =>{
        console.log(error);
        // return error;
      });
}