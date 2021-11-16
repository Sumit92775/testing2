// export const userDetails = () =>{
//     return{
//         type: "GETDETAILS",
//     }
// }
// export const userCartCount = () =>{
//     return{
//         type: "GETCARTCOUNT",
//     }
// }

// export const userNotificationCount = () =>{
//     return{
//         type: "GETNOTIFICATIONCOUNT",
//     }
// }



const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'


export const fetchUsersRequest = () => {
    return {
      type: FETCH_USERS_REQUEST
    }
  }
  
 export const fetchUsersSuccess = users => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users
    }
  }
  
 export const fetchUsersFailure = error => {
    return {
      type: FETCH_USERS_FAILURE,
      payload: error
    }
  }
  



































// export const incrementNumber = () =>{
//     return {
//         type : "INCREMENT",
//     }
// }

// export const decrementNumber = () =>{
//     return {
//         type : "DECREMENT",
//     }
// }



/*

import axios from 'axios';

export const FETCH_SOMETHING= 'FETCH_SOMETHING;
const ROOT_URL = 'http://api.youapi.com';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${aParamYouMayNeed}`;
    const request = axios.get(url);

    return {
        type: FETCH_SOMETHING,
        payload: request
    };
}







const changeTheNumber = (state = initialState, action) =>{
    
    switch(action.type){
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;    
        default : return state;
    }

}

export default changeTheNumber;


*/