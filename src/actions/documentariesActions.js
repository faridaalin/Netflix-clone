import axios from "axios";
import { DOCUMENTARIES } from "../config";

export const DOCUMENTARIES_LIST_LOADING = `DOCUMENTARIES_LIST_LOADING`;
export const DOCUMENTARIES_LIST_SUCCESS = "DOCUMENTARIES_LIST_SUCCESS";
export const DOCUMENTARIES_LIST_FAIL = "DOCUMENTARIES_LIST_FAIL";

export const getDocumentaries = () => async (dispatch) => {
  try {
    dispatch({
      type: DOCUMENTARIES_LIST_LOADING,
    });

    const res = await axios
      .get(DOCUMENTARIES)
      .then((data) => data.data.results);

    dispatch({
      type: DOCUMENTARIES_LIST_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: DOCUMENTARIES_LIST_FAIL,
    });
  }
};
