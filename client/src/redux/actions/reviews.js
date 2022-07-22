import axios from "axios";

import {
  GET_REVIEWS,
  GET_PRODUCT_REVIEWS,
  GET_ALL_REVIEWS,
  DELETE_REVIEW,
  POST_REVIEW,
} from "./actionTypes";

const URL_SERVER = "http://localhost:3001";


export function postReviews(id, payload) {
  return async function (dispatch) {
    await axios.post(`${URL_SERVER}${ratings}${crear}/${id}`, payload);

    return dispatch({
      type: POST_REVIEW,
      payload,
    });
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
      dispatch({ type: GET_PRODUCT_REVIEWS, payload: resp.data });
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
