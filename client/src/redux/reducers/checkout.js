import {
  APROBAR_PEDIDO,
  CHECKOUT,
  CREAR_PEDIDO,
  GET_FACTURA,
  GUARDAR_DATOS_COMPRADOR,
  GET_PEDIDOS,
  GET_USUARIOS,
  ACTUALIZAR_ESTADO_ENVIO,
} from "../actions/actionTypes";

const initialState = {
  checkout: {},
  datos: {},
  pedidos: [],
  usuarios: [],
  pedido: [],
  detalleEnvio: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT:
      return {
        ...state,
        checkout: action.payload,
      };
    case GUARDAR_DATOS_COMPRADOR:
      return {
        ...state,
        datos: action.payload,
      };
    case CREAR_PEDIDO:
      return {
        ...state,
        pedido: action.payload,
      };
    case GET_FACTURA:
      return {
        ...state,
        pedido: action.payload,
      };
    case APROBAR_PEDIDO:
      return {
        ...state,
        pedido: action.payload,
      };
    case GET_PEDIDOS:
      return {
        ...state,
        pedidos: action.payload,
      };
    case GET_USUARIOS:
      return {
        ...state,
        usuarios: action.payload,
      };

    case ACTUALIZAR_ESTADO_ENVIO:
      return {
        ...state,
        detalleEnvio: action.payload,
      };

    default:
      return state;
  }
}
