import axios from "axios";
import { TOP_MOVIES } from "../config";

export const MOVIES_LIST_LOADING = `MOVIES_LIST_LOADING`;
export const MOVIES_LIST_SUCCESS = "MOVIES_LIST_SUCCESS";
export const MOVIES_LIST_FAIL = "MOVIES_LIST_FAIL";

export const getMovieList = () => async (dispatch) => {
  try {
    dispatch({
      type: MOVIES_LIST_LOADING,
    });

    // const res = await fetch();
    // const data = await res.json();

    const res = await axios.get(TOP_MOVIES).then((data) => data.data.results);

    dispatch({
      type: MOVIES_LIST_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: MOVIES_LIST_FAIL,
    });
  }
};
