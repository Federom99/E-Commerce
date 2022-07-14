import {
  ADD_CART,
  MODIFY_CART,
  PRICE_CART,
  PRICE_REMOVE_CART,
  REMOVE_CART,
} from "./actionTypes";

export const addToCart = (order) => {
  return {
    type: ADD_CART,
    payload: order,
  };
};

export const modifyCart = (details) => {
  return {
    type: MODIFY_CART,
    payload: details,
  };
};

export const removeCart = (id,size) => {
  return {
    type: REMOVE_CART,
    payload: {
      id,
      size,
    },
  };
};

export const addOrder = (order) => {
  return {
    type: PRICE_CART,
    payload: order,
  };
};

export const removeOrder = (id,talle) => {
  return {
    type: PRICE_REMOVE_CART,
    payload: {
    id,
    size:talle
  }
  };
};
