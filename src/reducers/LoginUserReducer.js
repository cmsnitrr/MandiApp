import {GET_LOGEDIN_USER_DATA} from "../actions/type";
const initialState = {
    logedin_user: {}
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_LOGEDIN_USER_DATA:
        return {
          ...state,           //this is for preserving old data of the state in the store
          logedin_user: action.payload
        };
      default:
          return state;
      }
  }