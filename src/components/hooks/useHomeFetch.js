import { useState, useEffect } from "react";
import axios from "../../axios_baseurl";

export const useHomeFetch = (URL, title) => {
  const [content, setContent] = useState({
    loading: false,
    movies: [],
    errorMsg: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setContent((prevState) => ({ ...prevState, loading: true }));

      try {
        const response = await axios.get(URL);

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

    const keyFromStorage = `${title}`.toLowerCase().replace(/\s/g, "_");
    const fromStorage = JSON.parse(sessionStorage.getItem(keyFromStorage));

    if (fromStorage) {
      setContent(fromStorage);
    } else {
      fetchData();
    }
  }, [URL, title]);

  useEffect(() => {
    const key = `${title}`.toLowerCase().replace(/\s/g, "_");
    sessionStorage.setItem(`${key}`, JSON.stringify(content));
  }, [title, content]);

  return content;
};
