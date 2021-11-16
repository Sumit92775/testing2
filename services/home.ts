import Cookies from "universal-cookie";

const cookies = new Cookies();
export const getStoreByLocation = () =>{

    var config = {
    method: 'GET',
    // url: 'saloonplus.com:8000/api_v1/store/getStoreByLocation?location=test',
    headers: { 
        'Content-Type': 'application/json', 
    }
    };
      
    return fetch(`http://saloonplus.com:8000/api_v1/store/public/getStoreByLocation/?location=new delhi`, config)
    .then(response => {
        console.log("response",response);
        return response.json();
    }).catch(error =>{
        console.log(error);
        return error;
    });

}