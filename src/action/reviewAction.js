import api from "../utils/api";
import * as types from "../constants/review.constants";
import { commonUiActions } from "../action/commonUiAction";

const getReviews = (productId) => async (dispatch) => {
  try {
    dispatch({ type: types.REVIEW_GET_REQUEST });
    const response = await api.get('/review', { params: { productId } });
    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.REVIEW_GET_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.REVIEW_GET_FAIL, payload: error.error });
    dispatch(commonUiActions.showToastMessage(error.error, "error"));
  }
};

const addReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: types.REVIEW_ADD_REQUEST });
    const response = await api.post('/review', reviewData);

    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.REVIEW_ADD_SUCCESS, payload: response.data });
    dispatch(getReviews(reviewData.productId));
  } catch (error) {
    console.log("addReview 에러", error)
    dispatch({ type: types.REVIEW_ADD_FAIL, payload: error.message });
    dispatch(commonUiActions.showToastMessage(error.error, "error"));
  }
};

export const reviewActions = {
  getReviews,
  addReview
};
