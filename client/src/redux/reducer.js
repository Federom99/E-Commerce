import { ADD_CART, MODIFY_CART, REMOVE_CART } from "./actionTypes";

const initialState = {
    products: [],
    product: {},
    shoppingCart: []
};

const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'GET_PRODUCTS':
            return {...state, products: action.payload};
        case ADD_CART:
            return{
                ...state,
                shoppingCart:[...state.shoppingCart,action.payload],
            };
        case MODIFY_CART:
            let position = state.shoppingCart.findIndex(p=>p.id===action.payload.id)
            state.shoppingCart[position].cantidad += action.payload.amount
            return{
                ...state,                
            };
        case REMOVE_CART:
            return{
                ...state,
                shoppingCart:state.shoppingCart.filter(p=>p.id!==action.payload)
            };
        default:
            return state
    }
};
export default rootReducer;