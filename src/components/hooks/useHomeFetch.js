import { useState, useEffect } from "react";
import axios from "../../axios_baseurl";

export const useHomeFetch = (URL, title) => {
  const sessionKey = `${title}`.toLowerCase().replace(/\s/g, "_");

  const [content, setContent] = useState({
    loading: false,
    movies: [],
    errorMsg: "",
  });

  useEffect(() => {
    const sessionKey = `${title}`.toLowerCase().replace(/\s/g, "_");

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
    const fromStorage = JSON.parse(sessionStorage.getItem(sessionKey));

    if (fromStorage) {
      setContent(fromStorage);
    } else {
      fetchData();
    }
  }, [URL, title]);

  useEffect(() => {
    sessionStorage.setItem(sessionKey, JSON.stringify(content));
  }, [title, content, sessionKey]);

  return content;
};
