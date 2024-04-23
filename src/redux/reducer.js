// reducer.js

import { ADD_TRANSACTION, LOGIN_FAILURE, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_SUCCESS } from "./actionTypes";


const initialState = {
  user: null,
  errorMessage: null,
  transactions: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        errorMessage: null
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        user: null,
        errorMessage: action.payload
      };
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          errorMessage: null
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          user: null,
          errorMessage: action.payload
        };
        case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload] // Add new transaction to transactions array
      };
    default:
      return state;
  }
};

export default reducer;
