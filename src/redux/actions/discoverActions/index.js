//ACTIONS
import {
  FETCH_DISCOVER,
  FETCH_DISCOVER_SUCCESS,
  FETCH_DISCOVER_ERROR,
} from "../../types/discoverTypes";

// Action creators
export const fetchDiscover = () => {
  return {
    type: FETCH_DISCOVER,
  };
};

//Store data if API request was success
export const fetchDiscoverSuccess = (result) => {
  return {
    type: FETCH_DISCOVER_SUCCESS,
    payload: result,
  };
};

// Store error message  if API request fails
export const fetchDiscoverError = (error) => {
  return {
    type: FETCH_DISCOVER_ERROR,
    payload: error,
  };
};
