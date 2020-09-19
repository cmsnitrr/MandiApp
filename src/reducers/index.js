import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import LoginUserReducer from "./LoginUserReducer";
import ProductReducer from "./ProductReducer";
import UserReducer from "./UserReducer";
export default combineReducers({
  errors: errorReducer,
  loginUser:LoginUserReducer,
  productReducer:ProductReducer,
  userReducer:UserReducer
});