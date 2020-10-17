import axios from "axios";
import { DISCOVER } from "../../../config";
import {
  FETCH_DISCOVER,
  FETCH_DISCOVER_SUCCESS,
  FETCH_DISCOVER_ERROR,
} from "../../types/discoverTypes";
import {
  fetchDiscover,
  fetchDiscoverSuccess,
  fetchDiscoverError,
} from "../../actions/discoverActions";

// Initital state
const initialState = {
  loading: false,
  result: [],
  error: "",
};

// Define reduser function
const discoverReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISCOVER:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DISCOVER_SUCCESS:
      return {
        loading: false,
        result: action.payload,
        error: "",
      };

    case FETCH_DISCOVER_ERROR:
      return {
        loading: false,
        result: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

// Action creator - returns another function
export const fetchDiscoverData = () => {
  return (dispatch) => {
    dispatch(fetchDiscover);
    axios
      .get(DISCOVER)
      .then((response) => {
        // console.log("response:", response.data.results);
        const discover = response.data.results;
        dispatch(fetchDiscoverSuccess(discover));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchDiscoverError(errorMsg));
      });
  };
};

export default discoverReducer;
