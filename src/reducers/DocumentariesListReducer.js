import {
  DOCUMENTARIES_LIST_LOADING,
  DOCUMENTARIES_LIST_SUCCESS,
  DOCUMENTARIES_LIST_FAIL,
} from "../actions/documentariesActions";

const initialState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const DocumentariesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOCUMENTARIES_LIST_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };

    case DOCUMENTARIES_LIST_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to get documentaries list",
      };

    case DOCUMENTARIES_LIST_SUCCESS:
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

export default DocumentariesListReducer;
