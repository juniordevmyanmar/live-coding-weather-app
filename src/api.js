import React from "react";

const API = async (url, abortSignal) => {
  const response = await fetch(url, { signal: abortSignal });
  return response.json();
};

/**
 * This custom hooks uses useState to fetch data from server and return the result
 * @param {string} url
 */
export const useStateAPI = (url) => {
  const [value, setState] = React.useState(null);
  React.useEffect(() => {
    // This is the abort controller that will cancel the fetch if the component was unmounted
    const controller = new AbortController();
    const signal = controller.signal;

    let mounted = true;

    const fetchData = async () => {
      try {
        const data = await API(url, signal);
        setState(data);
      } catch (e) {
        setState(null);
      }
    };
    // it will fetch data only on mount so that
    if (mounted) {
      fetchData();
    }

    return () => {
      mounted = false;
      controller.abort();
    };
  }, [url]);

  return value;
};

/**
 * This method will use useReducer to get predicted state throughout the api request.
 * @param {string} url
 */
export const useReducerAPI = (url) => {
  const initialState = { loading: false, data: null, error: null };
  // This is reducer
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
  // we will use Reducer if we have to handle complex state in our component
  const [state, dispatch] = React.useReducer(reducer, initialState);
  React.useEffect(() => {
    // This is the abort controller that will cancel the fetch if the component was unmounted
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
    // it will fetch data only on mount so that
    if (mounted) {
      fetchData();
    }

    return () => {
      mounted = false;
      controller.abort();
    };
  }, [url]);

  return state;
};
