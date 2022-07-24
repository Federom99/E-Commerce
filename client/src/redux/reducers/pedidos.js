import {
  GET_PEDIDOS_BEGIN,
  GET_PEDIDOS_FAIL,
  GET_PEDIDOS_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  pedidos: [],
  loading: false,
  error: null,
};

export default function pedidosUsuarioReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PEDIDOS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_PEDIDOS_SUCCESS:
      return {
        ...state,
        loading: false,
        pedidos: action.payload.pedidos,
      };
    case GET_PEDIDOS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        pedidos: [],
      };

    default:
      return state;
  }
}
