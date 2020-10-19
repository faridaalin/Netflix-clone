import {
  DISCOVER_LIST_LOADING,
  DISCOVER_LIST_SUCCESS,
  DISCOVER_LIST_FAIL,
} from "../actions/discoverActions";

const initialState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const DiscoverListReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISCOVER_LIST_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };

    case DISCOVER_LIST_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to get dicover list",
      };

    case DISCOVER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: "",
      };

    default:
      return state;
  }
};

export default DiscoverListReducer;
