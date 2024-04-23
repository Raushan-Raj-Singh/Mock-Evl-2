// actions.js

import axios from 'axios';
import { ADD_TRANSACTION, LOGIN_FAILURE, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_SUCCESS } from './actionTypes';

export const signup = (userData, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://mock-evl-2.onrender.com/users', userData);
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
      navigate('/');
    } catch (error) {
      dispatch({ type: SIGNUP_FAILURE, payload: error.response.data.message });
    }
  };
};

export const login = (userData, navigate) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`https://mock-evl-2.onrender.com/users?email=${userData.email}&password=${userData.password}`);
        if (response.data.length > 0) {
          dispatch({ type: LOGIN_SUCCESS, payload: response.data[0] });
          navigate('/dashboard');
        } else {
          dispatch({ type: LOGIN_FAILURE, payload: 'Invalid email or password' });
        }
      } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: 'Login failed, please try again later' });
      }
    };
  };

  export const addTransaction = (transactionData) => {
    return {
      type: ADD_TRANSACTION,
      payload: transactionData
    };
  };