import {
  GET_REVIEWS,
  GET_PRODUCT_REVIEWS,
  GET_ALL_REVIEWS,
  DELETE_REVIEW,
  POST_REVIEW,
} from "../actions/actionTypes";

const initialState = {
  reviews: [],
};

export default function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case POST_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };

    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case GET_ALL_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };

    case GET_PRODUCT_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };

    case DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter((r) => r.id !== action.payload),
      };
    default:
      return state;
  }
}
