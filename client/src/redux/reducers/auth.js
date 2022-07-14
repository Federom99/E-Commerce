import {
  CLEAR_MESSAGE,
  LOGIN_BEGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user, loading: false, error: null, msg: null }
  : { isLoggedIn: false, user: null, loading: false, error: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        isLoggedIn: false,
        loading: true,
        error: null,
        msg: null,
      };
    case LOGIN_SUCCESS:
      console.log(payload);
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        loading: false,
        error: null,
        msg: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        loading: false,
        error: payload.error,
        msg: null,
      };

    case CLEAR_MESSAGE:
      return {
        ...state,
        error: null,
        msg: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
}
