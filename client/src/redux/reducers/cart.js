import {
  ADD_CART,
  MODIFY_CART,
  PRICE_CART,
  PRICE_REMOVE_CART,
  REMOVE_CART,
} from "../actions/actionTypes";

const initialState = {
  shoppingCart: [],
  priceCart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      for (let i=0;i<state.shoppingCart.length;i++){
        if (state.shoppingCart[i].id === action.payload.id && state.shoppingCart[i].talle === action.payload.talle){
          state.shoppingCart[i].cantidad += 1
          return{
            ...state
          }
        }
      }
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      };    

    case MODIFY_CART:
      for (let i=0;i<state.shoppingCart.length;i++){
        if (state.shoppingCart[i].id === action.payload.id && state.shoppingCart[i].size === action.payload.talle){
          state.shoppingCart[i].cantidad += action.payload.amount
          return{
            ...state
          }
        } 
      }
    case REMOVE_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter((p) => p.id !== action.payload),
      };
    case PRICE_CART:
      if (state.priceCart.find((p) => p.id === action.payload.id)) {
        let position = state.priceCart.findIndex(
          (p) => p.id === action.payload.id
        );
        state.priceCart[position].price = action.payload.price;
        return {
          ...state,
        };
      }
      return {
        ...state,
        priceCart: [...state.priceCart, action.payload],
      };
    case PRICE_REMOVE_CART:
      return {
        ...state,
        priceCart: state.priceCart.filter((p) => p.id !== action.payload),
      };
    default:
      return state;
  }
}
