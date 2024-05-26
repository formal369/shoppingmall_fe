import * as types from "../constants/notice.constants";

const initialState = {
  loading: false,
  error: "",
  noticeList: [],
  totalPageNum: 1,
  selectedNotice: null,
};

const noticeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.NOTICE_CREATE_REQUEST:
    case types.NOTICE_GET_REQUEST:
    case types.NOTICE_EDIT_REQUEST:
    case types.GET_NOTICE_DETAIL_REQUEST:
      return { ...state, loading: true };
    case types.NOTICE_CREATE_SUCCESS:
    case types.NOTICE_EDIT_SUCCESS:
      return { ...state, loading: false, error: "" };
    case types.NOTICE_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: "",
        noticeList: payload.data,
        totalPageNum: payload.totalPageNum
      };
    }
    case types.GET_NOTICE_DETAIL_SUCCESS: {
      return { ...state, loading: false, selectedNotice: payload };
    }
    case types.NOTICE_CREATE_FAIL:
    case types.NOTICE_GET_FAIL:
    case types.NOTICE_EDIT_FAIL:
    case types.GET_NOTICE_DETAIL_FAIL: {
      return { ...state, loading: false, error: payload };
    }
    case types.SET_SELECTED_NOTICE: {
      return { ...state, selectedNotice: payload };
    }
    default:
      return { ...state };
  }
}

export default noticeReducer