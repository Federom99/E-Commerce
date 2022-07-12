import AuthServices from "../../services/auth-services";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./actionTypes";
import { handleErrors } from "./product";

export const register = (data) => async (dispatch) => {
  try {
    const response = await AuthServices.register({ ...data });
    const res = await handleErrors(response);
    const res_1 = res.json();
    return dispatch(fetchRegisterSuccess(res_1.data));
  } catch (error) {
    dispatch(fetchRegisterFailure(error));
  }
};

export const fetchRegisterSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: { user },
});

export const fetchRegisterFailure = (error) => ({
  type: REGISTER_FAIL,
  payload: { error },
});

export const login = (data) => async (dispatch) => {
  try {
    const response = await AuthServices.register({ ...data });
    const res = await handleErrors(response);
    const res_1 = res.json();
    return dispatch(fetchloginSuccess(res_1.data));
  } catch (error) {
    dispatch(fetchloginFailure(error));
  }
};

export const fetchloginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: { user },
});

export const fetchloginFailure = (error) => ({
  type: LOGIN_FAIL,
  payload: { error },
});

export const logout = () => (dispatch) => {
  AuthServices.logout();

  dispatch({ type: LOGOUT });
};
