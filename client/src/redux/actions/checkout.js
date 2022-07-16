import axios from "axios";
import {
  CHECKOUT, CREAR_PEDIDO, GUARDAR_DATOS_COMPRADOR
} from "./actionTypes";

const URL_SERVER = "http://localhost:3001";

// Handle HTTP errors since fetch won't.
export const checkout = (checkoutData) => async dispatch => {
    const {data} = await axios.post(`${URL_SERVER}/create_preference`, checkoutData);
    return dispatch({
        type: CHECKOUT,
        payload: data
    })
} 

export const guardarDatosComprador = (datos) => {
  return{
    type: GUARDAR_DATOS_COMPRADOR,
    payload: datos
  }
}

export const crearPedido = (pedido) => async dispatch => {
  const {data} = await axios.post(`${URL_SERVER}/pedido/crear`, pedido, { withCredentials: true });
  return dispatch ({
    type: CREAR_PEDIDO,
    payload: data
  })
}