import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  //This is a hardcodede solution, not recommended in production
  const [totalCount, setTotalCount] = useState(0);

  const doFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) return;

    axios(url, options)
      .then((res) => {
        setIsLoading(false);
        setResponse(res.data);
        setTotalCount(res.headers["x-total-count"]);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data);
      });
    // eslint-disable-next-line
  }, [isLoading]);

  return [{ response, totalCount, isLoading, error }, doFetch];
};

export default useAxios;
