import {
  CLEAR_MESSAGE,
  LOGIN_BEGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";

const API_URL = "http://localhost:3001/user/";

export const loginGoogle = (data) => async (dispatch) => {
  dispatch(fetchloginBegin());
  try {
    const response = await fetch("http://localhost:3001/v1/auth/google", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: data,
      }),
      credentials: "include",
    });
    const rest = await response.json();
    const res = await handleErrors(response, rest);

    if (res.token) localStorage.setItem("user", JSON.stringify(res));
    return dispatch(fetchloginSuccess(res));
  } catch (error) {
    return dispatch(fetchloginFailure(error));
  }
};

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
      credentials: "include",
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
export function handleErrors(response, rest) {
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

export const clearMsg = (dispatch) => {
  return { type: CLEAR_MESSAGE };
};

export const logout = () => async (dispatch) => {
  // console.log("SALGO");
  await fetch(API_URL + "salir", {
    method: "POST",
    credentials: "include",
  });
  localStorage.removeItem("user");

  return dispatch({ type: LOGOUT });
};
