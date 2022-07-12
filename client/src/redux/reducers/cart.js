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
      for (let i=0;i<state.shoppingCart.length;i++){
        if (state.shoppingCart[i].id===action.payload.id && state.shoppingCart[i].talle === action.payload.size)
        state.shoppingCart.splice(i,1)
      }
      return {
        ...state,        
      };
    
    case PRICE_CART:
      for (let i=0;i<state.priceCart.length;i++){
        if (state.priceCart[i].id === action.payload.id && state.priceCart[i].talle === action.payload.talle){
          state.priceCart[i].price = action.payload.price
          return{
            ...state
          }
        }
      }

      return {
        ...state,
        priceCart: [...state.priceCart, action.payload],
      };
    case PRICE_REMOVE_CART:
      for (let i=0;i<state.priceCart.length;i++){
        if (state.priceCart[i].id===action.payload.id && state.priceCart[i].talle === action.payload.size)      
        state.priceCart.splice(i,1)
      }
      return {
        ...state,        
      };
    default:
      return state;
  }
}
