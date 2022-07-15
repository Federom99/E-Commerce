import {
    CHECKOUT, CREAR_PEDIDO, GUARDAR_DATOS_COMPRADOR,
  } from "../actions/actionTypes";
  
  const initialState = {
    checkout:{},
    datos: {}
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
      default:
        return state;
    }
  }
  