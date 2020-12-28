import React from "react";

const initialState = { loading: false, data: null, error: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { loading: true, data: null, error: null };
    case "success":
      return { loading: false, data: action.data, error: null };
    case "error":
      return { loading: false, data: null, error: action.error };
    default:
      throw new Error();
  }
};

export const API = async (url, abortSignal) => {
  const response = await fetch(url, { signal: abortSignal });
  return response.json();
};

export const HZAPIHook = (url) => {
  const [countryState, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    // ComponentDidMount
    const controller = new AbortController();
    const signal = controller.signal;
    let mounted = true;
    const fetchData = async () => {
      // This dispatch will trigger before api was called
      dispatch({ type: "loading" });
      try {
        const data = await API(url, signal);
        // This dispatch will trigger after api called was success
        dispatch({ type: "success", data: data });
      } catch (e) {
        // This dispatch will trigger after api called was failed
        dispatch({ type: "error", error: e });
      }
    };

    if (mounted) {
      fetchData();
    }

    return () => {
      //Component will unmount
      mounted = false;
      controller.abort();
    };
  }, [url]);

  return countryState;
};
