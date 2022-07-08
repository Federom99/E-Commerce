import { combineReducers } from "redux";
import product from "./product";
import cart from "./cart";
export default combineReducers({
  product,
  cart,
});
