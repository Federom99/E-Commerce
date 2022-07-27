import axios from "axios";

import {
  GET_REVIEWS,
  GET_PRODUCT_REVIEWS,
  GET_ALL_REVIEWS,
  DELETE_REVIEW,
  POST_REVIEW,
  CHANGE_MODAL_REVIEW,
  CHANGE_MODAL_OPEN,
  CHANGE_MODAL_CLOSE,
} from "./actionTypes";

const URL_SERVER = "http://localhost:3001/";

export function postReviews(id, payload) {
  return async function (dispatch) {
    try {
      const res = await axios.post(
        `${URL_SERVER}ratings/crear/${id}`,
        payload,
        { withCredentials: true }
      );
      return dispatch({
        type: POST_REVIEW,
        payload,
      });
    } catch (error) {
      return dispatch({
        type: POST_REVIEW,
        payload: error,
      });
    }
  };
}

export function getReviews(id) {
  return async function (dispatch) {
    const resp = await axios.get(`${URL_SERVER}ratings/usuario/${id}`);
    if (resp) {
      dispatch({ type: GET_REVIEWS, payload: resp.data });
    }
  };
}

export function getProductReviews(id) {
  return async function (dispatch) {
    const resp = await axios.get(`${URL_SERVER}ratings/${id}`);
    if (resp) {
      return dispatch({ type: GET_PRODUCT_REVIEWS, payload: resp.data });
    }
  };
}

export function getAllReviews() {
  return async function (dispatch) {
    const resp = await axios.get(`${URL_SERVER}ratings/`);
    if (resp) {
      dispatch({ type: GET_ALL_REVIEWS, payload: resp.data });
    }
  };
}

export function deleteReview(id) {
  return async function (dispatch) {
    await axios.delete(`${URL_SERVER}ratings/${id}`);
    return dispatch({ type: DELETE_REVIEW, payload: id });
  };
}

export function changeModalReview() {
  return async function (dispatch) {
    return dispatch({ type: CHANGE_MODAL_REVIEW });
  };
}

export const changeModalOPen = (id, imagen, nombre, userId, estado) => ({
  type: CHANGE_MODAL_OPEN,
  payload: { id, imagen, nombre, userId, estado },
});
export function changeModalClose() {
  return { type: CHANGE_MODAL_CLOSE };
}
