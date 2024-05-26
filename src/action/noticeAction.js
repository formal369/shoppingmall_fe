import api from "../utils/api";
import * as types from "../constants/notice.constants";
import { commonUiActions } from "./commonUiAction";

const getNoticeList = (query) => async (dispatch) => {
  try {
    dispatch({ type: types.NOTICE_GET_REQUEST });
    const response = await api.get('/notice', {
      params: { ...query }
    });
    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.NOTICE_GET_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.NOTICE_GET_FAIL, payload: error.error });
    dispatch(commonUiActions.showToastMessage(error.error, "error"));
  }
};

const getNoticeDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_NOTICE_DETAIL_REQUEST });
    const response = await api.get(`/notice/${id}`);
    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.GET_NOTICE_DETAIL_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({ type: types.GET_NOTICE_DETAIL_FAIL, payload: error.error });
    dispatch(commonUiActions.showToastMessage(error.error, "error"));
  }
};

const createNotice = (formData) => async (dispatch) => {
  try {
    dispatch({ type: types.NOTICE_CREATE_REQUEST });
    const response = await api.post('/notice', formData);
    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.NOTICE_CREATE_SUCCESS });
    dispatch(commonUiActions.showToastMessage("공지사항 생성 완료", "success"));
    dispatch(getNoticeList());
  } catch (error) {
    dispatch({ type: types.NOTICE_CREATE_FAIL, payload: error.error });
    dispatch(commonUiActions.showToastMessage(error.error, "error"));
  }
};

const deleteNotice = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.NOTICE_DELETE_REQUEST });
    const response = await api.delete(`/notice/${id}`);
    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.NOTICE_DELETE_SUCCESS });
    dispatch(commonUiActions.showToastMessage("공지사항 삭제 완료", "success"));
    dispatch(getNoticeList());
  } catch (error) {
    dispatch({ type: types.NOTICE_DELETE_FAIL, payload: error.error });
    dispatch(commonUiActions.showToastMessage(error.error, "error"));
  }
};

const editNotice = (formData, id) => async (dispatch) => {
  try {
    dispatch({ type: types.NOTICE_EDIT_REQUEST });
    const response = await api.put(`/notice/${id}`, formData);
    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.NOTICE_EDIT_SUCCESS, payload: response.data.data });
    dispatch(commonUiActions.showToastMessage("공지사항 수정 완료", "success"));
    dispatch(getNoticeList());
  } catch (error) {
    dispatch({ type: types.NOTICE_EDIT_FAIL, payload: error.error });
    dispatch(commonUiActions.showToastMessage(error.error, "error"));
  }
};

export const noticeActions = {
  getNoticeList,
  createNotice,
  deleteNotice,
  editNotice,
  getNoticeDetail,
};
