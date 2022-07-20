import axios from "axios";
import {
  APROBAR_PEDIDO,
  CHECKOUT,
  CREAR_PEDIDO,
  GET_FACTURA,
  GUARDAR_DATOS_COMPRADOR,
  GET_PEDIDOS,
  GET_USUARIOS,
  ACTUALIZAR_ESTADO_ENVIO,
  MAIL_ADMIN,
  CONFIRMAR_COMPRA,
} from "./actionTypes";

const URL_SERVER = "http://localhost:3001";

// Handle HTTP errors since fetch won't.
export const checkout = (checkoutData) => async (dispatch) => {
  const { data } = await axios.post(
    `${URL_SERVER}/create_preference`,
    checkoutData
  );
  return dispatch({
    type: CHECKOUT,
    payload: data,
  });
};

export const guardarDatosComprador = (checkoutData) => async dispatch => {
  const {data} = await axios.post(`${URL_SERVER}/factura/crear`, checkoutData);
  return dispatch({
      type: GUARDAR_DATOS_COMPRADOR,
      payload: data
  })
} 

export const crearPedido = (pedido) => async dispatch => {
  const {data} = await axios.post(`${URL_SERVER}/pedido/crear`, pedido, { withCredentials: true });
  // console.log(data)
  return dispatch ({
    type: CREAR_PEDIDO,
    payload: data
  })
}

export const getFactura = (idPedido) => async (dispatch) => {
  const { data } = await axios.get(`${URL_SERVER}/pedido/${idPedido}`);
  // console.log(data)
  return dispatch({
    type: GET_FACTURA,
    payload: data,
  });
};

export const aprobarPedido = (datos) => async (dispatch) => {
  const { data } = await axios.put(`${URL_SERVER}/factura/edit`, datos);
  return dispatch({
    type: APROBAR_PEDIDO,
    payload: data,
  });
};

export function getPedidos() {
  return async function (dispatch) {
    try {
      var json = await axios.get(`${URL_SERVER}/pedidos/`, {});
      return dispatch({
        type: GET_PEDIDOS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUsuarios() {
  return async function (dispatch) {
    try {
      var json = await axios.get(`${URL_SERVER}/usuarios/`, {});
      return dispatch({
        type: GET_USUARIOS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateUser(payload) {
  return async function () {
    try {
      console.log(payload)
      const response = await axios.put(`${URL_SERVER}/admin/usuario`, payload);
      return response;
    } catch (e) {
      console.log(e);
    }
  };
}




export function enviarMail(userMail) {
  return async function (dispatch) {
    await axios.post(`${URL_SERVER}usuario/confirmacion`, { mail: userMail });

    dispatch({ type: CONFIRMAR_COMPRA, payload: userMail });
  };
}


export function updateEnvio(id, payload, productos) {
  return async function (dispatch) {
    await axios
      .put(`${URL_SERVER}${admin}${pedido}${id}`, { estado: payload.newEstado })
      .then((res) => {
        res.data.productos = productos;
        dispatch({ type: ACTUALIZAR_ESTADO_ENVIO, payload: res.data });
      });
  };
}

export function mailAdmin(userId, { newEstado }) {
  return async function (dispatch) {
    if (newEstado === "En preparación") {
      await axios.post(`${URL_SERVER}usuario/confirmacion`, { userId: userId });
    }
    if (newEstado === "En camino") {
      await axios.post(`${URL_SERVER}${admin}despachar`, { userId: userId });
    }
    if (newEstado === "En punto de entrega/poder del correo") {
      await axios.post(`${URL_SERVER}${admin}correo`, { userId: userId });
    }
    if (newEstado === "Entregado") {
      await axios.post(`${URL_SERVER}${admin}entrega`, { userId: userId });
    }

    dispatch({ type: MAIL_ADMIN });
  };
}
