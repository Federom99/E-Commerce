import {
  GET_PEDIDOS_BEGIN,
  GET_PEDIDOS_FAIL,
  GET_PEDIDOS_SUCCESS,
  GET_PRODUCTS_BEGIN,
} from "./actionTypes";

const URL = "http://localhost:3001/pedidos/user/";

export const getPedidos = (id) => {
  return async (dispatch) => {
    dispatch(fetchPedidosBegin());
    try {
      const response = await fetch(URL + id);
      const res = await handleErrors(response);
      const json = await res.json();
      return dispatch(fetchPedidosSuccess(json));
    } catch (error) {
      return dispatch(fetchPedidosFailure(error));
    }
  };
};

export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchPedidosBegin = () => ({
  type: GET_PEDIDOS_BEGIN,
});

export const fetchPedidosSuccess = (pedidos) => ({
  type: GET_PEDIDOS_SUCCESS,
  payload: { pedidos },
});

export const fetchPedidosFailure = (error) => ({
  type: GET_PEDIDOS_FAIL,
  payload: { error },
});
