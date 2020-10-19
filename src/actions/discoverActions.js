import axios from "axios";
import { DISCOVER } from "../config";

export const DISCOVER_LIST_LOADING = `DISCOVER_LIST_LOADING`;
export const DISCOVER_LIST_SUCCESS = "DISCOVER_LIST_SUCCESS";
export const DISCOVER_LIST_FAIL = "DISCOVER_LIST_FAIL";

export const getDiscoverList = () => async (dispatch) => {
  try {
    dispatch({
      type: DISCOVER_LIST_LOADING,
    });

    // const res = await fetch();
    // const data = await res.json();

    const res = await axios.get(DISCOVER).then((data) => data.data.results);

    dispatch({
      type: DISCOVER_LIST_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: DISCOVER_LIST_FAIL,
    });
  }
};
