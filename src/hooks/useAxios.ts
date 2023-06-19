import { useState, useEffect } from "react";

const useAxios = (configObj: any) => {

  const {
    axiosInstance,
    method,
    url,
    requestConfig = {}
  } = configObj;

  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const resp = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal
        });
        console.log('api response is: ', resp);
        setResponse(resp.data);
      } catch (err) {
        console.log((err as Error).message);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // useEffect cleanup function
    return () => controller.abort();

  }, []);

  return [response, error, loading];

};

export default useAxios;