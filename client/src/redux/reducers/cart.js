import {
  ADD_CART,
  DELETE_CART,
  MODIFY_CART,
  PRICE_CART,
  PRICE_REMOVE_CART,
  REMOVE_CART,
  REMOVE_LOCAL_CART,
  SET_LOCAL_CART,
} from "../actions/actionTypes";

const cart = JSON.parse(localStorage.getItem("cart"))
const initialState = cart ? {
  shoppingCart: cart.shoppingCart,
  order: [],
  loading:false,
  error:null,
  cartRemainingStock: cart.cartRemainingStock,
} :
{
  shoppingCart: [],
  order: [],
  loading: false,
  error: null,
  cartRemainingStock:[],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      for (let i = 0; i < state.shoppingCart.length; i++) {
        if (
          state.shoppingCart[i].id === action.payload.id &&
          state.shoppingCart[i].talle === action.payload.talle
        ) {
          state.shoppingCart[i].cantidad += 1;
          return {
            ...state,
          };
        }
      }
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      };

    case MODIFY_CART:
      for (let i=0;i<state.shoppingCart.length;i++){
        if (state.shoppingCart[i].id === action.payload.id && state.shoppingCart[i].talle === action.payload.size){
          state.shoppingCart[i].cantidad += action.payload.amount
          return{
            ...state
          }
        } 
      }
    case REMOVE_CART:
      for (let i = 0; i < state.shoppingCart.length; i++) {
        if (
          state.shoppingCart[i].id === action.payload.id &&
          state.shoppingCart[i].talle === action.payload.size
        )
          state.shoppingCart.splice(i, 1);
      }
      return {
        ...state,
      };

    case PRICE_CART:
      for (let i = 0; i < state.order.length; i++) {
        if (
          state.order[i].id === action.payload.id &&
          state.order[i].talle === action.payload.talle
        ) {
          state.order[i] = action.payload;
          state.shoppingCart[i].cantidad = action.payload.cantidad;
          return {
            ...state,
          };
        }
      }
      return {
        ...state,
        order: [...state.order, action.payload],
      };

    case PRICE_REMOVE_CART:
      for (let i = 0; i < state.shoppingCart.length; i++) {
        if (
          state.shoppingCart[i].id === action.payload.id &&
          state.shoppingCart[i].talle === action.payload.size
        ) {
          state.shoppingCart.splice(i, 1);
          break;
        }
      }
      for (let i = 0; i < state.order.length; i++) {
        if (
          state.order[i].id === action.payload.id &&
          state.order[i].talle === action.payload.size
        ) {
          state.order.splice(i, 1);
          break;
        }
      }
      return {
        ...state,
      };
    case SET_LOCAL_CART:
      return {
        ...state,
      };
    case DELETE_CART:
      return{
        ...state,
        shoppingCart:[],
        order:[],
        cartRemainingStock: [],
      }
    case "SET_LOCAL_CART":
      return{
        ...state
      }
    case "REMOVE_LOCAL_CART":
      return{
        ...state,
        shoppingCart:[],
        order:[]
      }
    case "SET_ITEM_STOCK":
      return{
        ...state,
        cartRemainingStock: [...state.cartRemainingStock,action.payload]
      }
    case "MODIFY_ITEM_STOCK":
      for (let i=0;i<state.cartRemainingStock.length;i++){
        if (state.cartRemainingStock[i].id === action.payload.id && state.cartRemainingStock[i].talle === action.payload.talle){
          state.cartRemainingStock[i].stock -=action.payload.amount
          break;
        }
      }
      return{
        ...state
      }
    case "RESET_ITEM_STOCK":
      for (let i=0;i<state.cartRemainingStock.length;i++){
        if (state.cartRemainingStock[i].id === action.payload.id && state.cartRemainingStock[i].talle === action.payload.talle){
          state.cartRemainingStock.splice(i,1)  
        }
      }  
      return{
        ...state
      }
    default:
      return state;
  }
}
