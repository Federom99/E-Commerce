import { ADD_CART, MODIFY_CART, PRICE_CART, PRICE_REMOVE_CART, REMOVE_CART } from "./actionTypes";

const initialState = {
    allProducts: [],
    products: [],
    product: {},
    shoppingCart: [],
    priceCart:[],
    category: ""
};

const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'GET_PRODUCTS':
            return {...state, products: action.payload, allProducts: action.payload};
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
        case PRICE_CART:
            if (state.priceCart.find(p=>p.id===action.payload.id)){
                let position= state.priceCart.findIndex(p=>p.id===action.payload.id)
                state.priceCart[position].price= action.payload.price
                return{
                    ...state
                }
            }            
            return{
                ...state,
                priceCart:[...state.priceCart, action.payload]
            }
        case PRICE_REMOVE_CART:
            return{
                ...state,
                priceCart:state.priceCart.filter(p=>p.id!==action.payload)
            }  
        case 'ORDER_BY_CATEGORY':
            const payload = action.payload
            return {
                ...state,
                products: [...state.allProducts].filter(product => product.categorium.nombre === payload)
            }
        case 'GET_PRODUCT':
            return {...state, product: action.payload}
        default:
            return state
    }
};
export default rootReducer;
