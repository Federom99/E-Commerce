import { combineReducers } from "redux";
import product from "./product";
import cart from "./cart";
import auth from "./auth";
import checkout from "./checkout";
import favorites from "./favoritos";

export default combineReducers({
  product,
  cart,
  auth,
  checkout,
  favorites
});
