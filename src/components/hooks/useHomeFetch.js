import { useState, useEffect } from "react";
import axios from "../../axios_baseurl";

export const useHomeFetch = (URL) => {
  const [content, setContent] = useState({
    loading: false,
    movies: [],
    errorMsg: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setContent((prevState) => ({ ...prevState, loading: true }));

      try {
        const movies = [];
        const response = await axios.get(URL);
        const result = response.data.results;
        movies.push(result);
        setContent((prevState) => ({
          ...prevState,
          loading: false,
          movies: [...response.data.results],
        }));
      } catch (e) {
        setContent((prevState) => ({
          ...prevState,
          loading: false,
          errorMsg: "Content failed to load",
        }));
        console.log(e);
      }
    };

    fetchData();
  }, [URL]);
  return content;
};
