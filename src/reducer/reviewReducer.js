import * as types from "../constants/review.constants";

const initialState = {
  loading: false,
  reviews: [],
  error: null,
};

const reviewReducer = (state = initialState, action) => {
  const { type, payload } = action;

  console.log("리뷰리듀서페이로드", payload)
  console.log("리뷰리듀서타입", type)

  switch (type) {
    case types.REVIEW_GET_REQUEST:
    case types.REVIEW_ADD_REQUEST:
      return { ...state, loading: true };
    case types.REVIEW_GET_SUCCESS:
      return { ...state, loading: false, reviews: payload.data };
    case types.REVIEW_ADD_SUCCESS:
      return { ...state, loading: false, error: null };
    case types.REVIEW_GET_FAIL:
    case types.REVIEW_ADD_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default reviewReducer;
