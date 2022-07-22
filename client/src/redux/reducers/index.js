import { combineReducers } from "redux";
import product from "./product";
import cart from "./cart";
import auth from "./auth";
import checkout from "./checkout";
import favorites from "./favoritos";
import userReducer from "./userProfile";
import pedidos from "./pedidos";

export default combineReducers({
  product,
  cart,
  auth,
  checkout,
  userReducer,
  pedidos,
  favorites,
});
