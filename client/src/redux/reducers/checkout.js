import {
  APROBAR_PEDIDO,
  CHECKOUT, CREAR_PEDIDO, GET_FACTURA, GUARDAR_DATOS_COMPRADOR, GET_PEDIDOS, GET_USUARIOS,
  ACTUALIZAR_ESTADO_ENVIO,
} from "../actions/actionTypes";

const initialState = {
  checkout: {},
  datos: {},
  pedidos: [],
  usuarios: [],
  pedido: [],
  usuariosFiltrados: [],
  detalleEnvio: {}
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "FILTER_USUARIOS":
      console.log(action.payload)
      return {
        ...state,
        usuariosFiltrados: state.usuarios.filter(e => e.nombre.toLowerCase().includes(action.payload.toLowerCase()))
        // usuariosFiltrados: usuarios.filter(el => el.nombre.toLowerCase().includes(search.nombre.toLowerCase()))
      };
    case "RESET_FILTER":
      return {
        ...state,
        usuarios: action.payload,
        usuariosFiltrados: action.payload
      }
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
      const filtrados = []
      for (let i = 0; i < state.usuariosFiltrados.length; i++) {
        for (let j = 0; j < action.payload.length; j++) {
          state.usuariosFiltrados[i].id === action.payload[j].id && filtrados.push(action.payload[j])
        }
      }
      console.log(filtrados)
      return {
        ...state,
        usuarios: action.payload,
        usuariosFiltrados: state.usuariosFiltrados.length < 1 ? action.payload : filtrados
      }
    case ACTUALIZAR_ESTADO_ENVIO:
      return {
        ...state,
        detalleEnvio: action.payload,
      };
    default:
      return state;
  }
}
