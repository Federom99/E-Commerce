import {
    CHECKOUT, CREAR_PEDIDO, GUARDAR_DATOS_COMPRADOR, GET_PEDIDOS, GET_USUARIOS,
  } from "../actions/actionTypes";
  
  const initialState = {
    checkout:{},
    datos: {},
    pedidos: [],
    usuarios: []
  };
  
  export default function productReducer(state = initialState, action) {
    switch (action.type) {
      case CHECKOUT:
        return {
          ...state,
          checkout: action.payload
        };
      case GUARDAR_DATOS_COMPRADOR:
        return {
          ...state,
          datos: action.payload
        }
      case CREAR_PEDIDO:
        return {
          ...state
        }
      case GET_PEDIDOS:
        return {
          ...state,
          pedidos: action.payload
        }
      case GET_USUARIOS:
        return {
          ...state,
          usuarios: action.payload
        }
      default:
        return state;
    }
  }
  