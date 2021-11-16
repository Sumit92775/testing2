// import { getMyDetails } from "../services/addresses";
// import { getCartStatus } from "../services/header";
// import { getNotifications } from "../services/notification";
// import React, { useEffect, useState } from 'react';

import { getMyDetails } from '../services/addresses'
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from './userDetails'

// var initialState = 10;
// let user, cartCount, notificationCount;

// (async function fun(){
//     const res = await getMyDetails();
//     // data = res;
//     console.log("value: ",res);
//     initialState = JSON.stringify(res);
//     localStorage.setItem('userData',JSON.stringify(res))
//     // callback(res);
// })();


          
// export const details = (state = initialState, action) =>{

//     switch(action.type){
//         case "GETDETAILS": return localStorage.getItem('userData');
//         // case "GETCARTCOUNT": return {cartCount: data};
//         // case "GETNOTIFICATIONCOUNT": return {user: data};
//         default : return 99;
//     }

// }


const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const initialState = {
  loading: false,
  users: [],
  error: ''
}


const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'


export const reducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
  }
}

export const fetchUsers = () => {
    return function (dispatch) {
      dispatch(fetchUsersRequest())
      axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
          // response.data is the users
          dispatch(fetchUsersSuccess(response))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchUsersFailure(error.message))
        })
    }
  }


// const store = createStore(reducer, applyMiddleware(thunkMiddleware))
// console.log("Store: ",store.getState());
// store.subscribe(() => { console.log(store.getState()) })
// store.dispatch(fetchUsers())



