import axios from 'axios';
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_BEGIN,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  ORDER_BY_CATEGORY,
  ORDER_BY
} from "./actionTypes";

export const getProducts = (search) => {
  return async (dispatch) => {
    dispatch(fetchProductsBegin());
    try {
      const url = new URL("http://localhost:3001/products");
      if (search) {
        const params = new URLSearchParams(url.search);
        const { name } = search;
        params.set("name", name);
        if (params) url.search = params;
      }
      const response = await fetch(url);
      const res = await handleErrors(response);
      const json = await res.json();
      return dispatch(fetchProductsSuccess(json.productos));
    } catch (error) {
      return dispatch(fetchProductsFailure(error));
    }
  };
};

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchProductsBegin = () => ({
  type: GET_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: { products },
});

export const fetchProductsFailure = (error) => ({
  type: GET_PRODUCTS_FAIL,
  payload: { error },
});

export const orderByCategoryName = (category) => ({
  type: ORDER_BY_CATEGORY,
  payload: category,
});

export const orderBy = (value) => ({
    type: ORDER_BY,
    payload: value
})

export const getProduct = (productId) => {
  return async function (dispatch) {
    try {
      const response = await fetch(
        `http://localhost:3001/product/${productId}`
      );
      const data = await response.json();
      console.log(data);
      dispatch(fetchProductSuccess(data));
    } catch (error) {
      return dispatch(fetchProductFailure(error));
    }
  };
};

export const fetchProductBegin = () => ({
  type: GET_PRODUCT_BEGIN,
});

export const fetchProductSuccess = (product) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: { product },
});

export const fetchProductFailure = (error) => ({
  type: GET_PRODUCT_FAIL,
  payload: { error },
});

export const postProduct = (payload) => {
  return async function(){
      console.log(payload)
      var json = await axios.post("http://localhost:3001/create/product/",payload)
      return json;
  }
};
