import {
  APROBAR_PEDIDO,
    CHECKOUT, CREAR_PEDIDO, GET_FACTURA, GUARDAR_DATOS_COMPRADOR,
  } from "../actions/actionTypes";
  
  const initialState = {
    checkout:{},
    datos: {},
    pedido: [],
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
          ...state,
          pedido: action.payload
        }
      case GET_FACTURA:
        return {
          ...state,
          pedido: action.payload
        }
      case APROBAR_PEDIDO:
        return {
          ...state,
          pedido: action.payload
        }
      default:
        return state;
    }
  }
  