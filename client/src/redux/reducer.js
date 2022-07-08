const initialState = {
    allProducts: [],
    products: [],
    product: {},
    category: ""
};

const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'GET_PRODUCTS':
            return {...state, products: action.payload, allProducts: action.payload};
        case 'ORDER_BY_CATEGORY':
            const payload = action.payload
            return {
                ...state,
                products: [...state.allProducts].filter(product => product.categorium.nombre === payload)
            }
            return {...state, products: action.payload};
        case 'GET_PRODUCT':
            return {...state, product: action.payload}
        default:
            return state
    }
};
export default rootReducer;