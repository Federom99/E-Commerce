import {
  APROBAR_PEDIDO,
  CHECKOUT, CREAR_PEDIDO, GET_FACTURA, GUARDAR_DATOS_COMPRADOR, GET_PEDIDOS, GET_USUARIOS,
  ACTUALIZAR_ESTADO_ENVIO, GET_ALL_SUCURSALES
} from "../actions/actionTypes";

const initialState = {
  checkout: {},
  datos: {},
  pedidos: [],
  usuarios: [],
  pedido: [],
  usuariosFiltrados: [],
  detalleEnvio: [],
  sucursales: [],
  pedidosFiltrados: []
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
      case "FILTER_PEDIDOS":
        console.log(action.payload)
        return {
          ...state,
          pedidosFiltrados: state.pedidos.filter(e => e.direccion_de_envio.direccion.toLowerCase().includes(action.payload.toLowerCase()))
          // usuariosFiltrados: usuarios.filter(el => el.nombre.toLowerCase().includes(search.nombre.toLowerCase()))
        };
    case "RESET_FILTER":
      return {
        ...state,
        usuarios: action.payload,
        usuariosFiltrados: action.payload
      }
    case "RESET_FILTER_PEDIDOS":
      return {
        ...state,
        pedidos: action.payload,
        pedidosFiltrados: action.payload
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
      const filtrado = []
      for (let i = 0; i < state.pedidosFiltrados.length; i++) {
        for (let j = 0; j < action.payload.length; j++) {
          state.pedidosFiltrados[i].id === action.payload[j].id && filtrado.push(action.payload[j])
        }
      }
      return {
        ...state,
        pedidos: action.payload,
        pedidosFiltrados: state.pedidosFiltrados.length < 1 ? action.payload : filtrado
      }
    case GET_USUARIOS:
      const filtrados = []
      for (let i = 0; i < state.usuariosFiltrados.length; i++) {
        for (let j = 0; j < action.payload.length; j++) {
          state.usuariosFiltrados[i].id === action.payload[j].id && filtrados.push(action.payload[j])
        }
      }
      // console.log(filtrados)
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
    case GET_ALL_SUCURSALES:
      return {
        ...state,
        sucursales: action.payload
      }
    default:
      return state;
  }
}
