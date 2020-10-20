import {
  MOVIES_LIST_LOADING,
  MOVIES_LIST_SUCCESS,
  MOVIES_LIST_FAIL,
} from "../actions/movieActions";

const initialState = {
  loading: false,
  data: [],
  title: "Movies",
  errorMsg: "",
};

const reducerMovieList = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_LIST_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };

    case MOVIES_LIST_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to get movie list",
      };

    case MOVIES_LIST_SUCCESS:
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

export default reducerMovieList;
