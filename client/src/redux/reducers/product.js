import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_BEGIN,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  ORDER_BY_CATEGORY,
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
      return {
        ...state,
        loading: false,
        products: action.payload.products,
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
      state.allProducts = state.products;
      return {
        ...state,
        products: [...state.allProducts].filter(
          (product) => product.categorium.nombre === payload
        ),
      };
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
    default:
      return state;
  }
}
