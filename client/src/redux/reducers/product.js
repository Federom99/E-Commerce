import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_BEGIN,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  ORDER_BY_CATEGORY,
  ORDER_BY
} from "../actions/actionTypes";

const initialState = {
  allProducts: [],
  products: [],
  category: "",
  product: {},
  loading: false,
  error: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_PRODUCTS_SUCCESS:
      // let full = state.products; // se se quiere un estado anterior
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        allProducts: action.payload.products,
      };

    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        products: [],
      };
    case ORDER_BY_CATEGORY:
      const payload = action.payload;
      if(payload === "Todos") return {...state, products: [...state.allProducts]};
      return {
        ...state,
        products: [...state.allProducts].filter(
          (product) => product.categorium.nombre === payload
        ),
      };
    case ORDER_BY:
      if(action.payload === 'A-Z'){
        return {
          ...state,
          products: [...state.products].sort((a, b) => {
            return (a.nombre.toLowerCase() > b.nombre.toLowerCase() ? 1 : -1 )
          })
        }
      }
      if(action.payload === 'Z-A'){
        return {
          ...state,
          products: [...state.products].sort((a, b) => {
            return (a.nombre.toLowerCase() < b.nombre.toLowerCase() ? 1 : -1 )
          })
        }
      }
      if(action.payload === 'MayorMenor'){
        return {
          ...state,
          products: [...state.products].sort((a, b) => {
            let priceA = a.precio
            let priceB = b.precio
            return priceA < priceB ? 1 : -1
          })
        }
      }
      if(action.payload === 'MenorMayor'){
        return {
          ...state,
          products: [...state.products].sort((a, b) => {
            let priceA = a.precio
            let priceB = b.precio
            return priceA > priceB ? 1 : -1
          })
        }
      }
    case GET_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload.product,
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        product: {},
      };
    case 'POST_PRODUCT':
      return {
        ...state,
      }
    default:
      return state;
  }
}
