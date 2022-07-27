import {
  GET_REVIEWS,
  GET_PRODUCT_REVIEWS,
  GET_ALL_REVIEWS,
  DELETE_REVIEW,
  POST_REVIEW,
  CHANGE_MODAL_REVIEW,
  CHANGE_MODAL_CLOSE,
  CHANGE_MODAL_OPEN,
} from "../actions/actionTypes";

const initialState = {
  reviews: [],
  review: {},
  modal: false,
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
    case CHANGE_MODAL_REVIEW:
      return {
        ...state,
        modal: !modal,
      };
    case CHANGE_MODAL_CLOSE:
      return {
        ...state,
        modal: false,
      };
    case CHANGE_MODAL_OPEN:
      return {
        ...state,
        review: {
          id: action.payload.id,
          imagen: action.payload.imagen,
          nombre: action.payload.nombre,
          userId: action.payload.userId,
          estado: action.payload.estado,
        },
        modal: true,
      };
    default:
      return state;
  }
}
