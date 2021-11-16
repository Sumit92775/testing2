import Cookies from "universal-cookie"
const cookies = new Cookies;

export const getCartStatus = () =>{
    var config = {
        method: 'GET',
        // url: 'saloonplus.com:6001/api_v1/cart/getCartStatus',
        headers: { 
          'Authorization': 'authToken', 
          'Content-Type': 'application/json', 
           accesstoken: cookies.get('accessToken')
        }
      };

      return fetch(`http://saloonplus.com:6001/api_v1/cart/getCartStatus`, config)
      .then(response => {
        if(response.status === 404 || response.status === 500){
          // console.log("Response Header: ", response);
          return response;
        }

        // console.log("Response Header: ", response);
        return response.json();
          // return response.json();
    }).catch(error =>{
        console.log("Error in getting cartStatus: ",error);
      });
}