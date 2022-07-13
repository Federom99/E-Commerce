import {
  LOGIN_BEGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_BEGINS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./actionTypes";

const API_URL = "http://localhost:3001/user/";

export const register = (data) => async (dispatch) => {
  dispatch(fetchRegisterBegin());
  try {
    const response = await fetch(API_URL + "register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    //
    const res_1 = await response.json();
    const res = await handleErrorsRegister(response, res_1);
    console.log(res_1);
    return dispatch(fetchRegisterSuccess(res.data));
  } catch (error) {
    return dispatch(fetchRegisterFailure(error));
  }
};

// Handle HTTP errors since fetch won't.
function handleErrorsRegister(response, rest) {
  console.log(response);
  if (response.status === 400) {
    throw rest.msg;
  }
  return response;
}

export const fetchRegisterBegin = (user) => ({
  type: REGISTER_BEGINS,
});

export const fetchRegisterSuccess = (msg) => ({
  type: REGISTER_SUCCESS,
  payload: { msg },
});

export const fetchRegisterFailure = (error) => ({
  type: REGISTER_FAIL,
  payload: { error },
});

export const login = (data) => async (dispatch) => {
  dispatch(fetchloginBegin());
  try {
    const response = await fetch(API_URL + "login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const rest = await response.json();
    const res = await handleErrors(response, rest);
    if (res.token) localStorage.setItem("user", JSON.stringify(res));
    return dispatch(fetchloginSuccess(res));
  } catch (error) {
    return dispatch(fetchloginFailure(error));
  }
};

// Handle HTTP errors since fetch won't.
function handleErrors(response, rest) {
  if (response.status === 400) {
    throw rest.msg;
  }
  return rest;
}

export const fetchloginBegin = () => ({
  type: LOGIN_BEGIN,
});

export const fetchloginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: { user },
});

export const fetchloginFailure = (error) => ({
  type: LOGIN_FAIL,
  payload: { error },
});

export const logout = () => (dispatch) => {
  localStorage.removeItem("user");

  dispatch({ type: LOGOUT });
};
