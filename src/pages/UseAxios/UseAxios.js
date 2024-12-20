import axios from "axios";
import defaultAxios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    if (!opts.url) {
      return;
    }

    axiosInstance(opts)
    .then((data) => {
      setState({ ...state, loading: false, data });
    })
    .catch((error) => setState({ ...state, loading: false, error }));
  }, [trigger]);

  return { ...state, refetch };
};

function UseAxios() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });

  return (
      <div>
        <h1>useAxios</h1>
        <p>{loading && "Loading"}</p>
        <p>{data && data.status}</p>
        <button onClick={refetch}>refetch</button>
      </div>
  );
}

export default UseAxios;
