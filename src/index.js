import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { APIKeyContext } from "./context";

const WEATHER_KEY = atob(
  process.env.REACT_APP_WEATHER_KEY);

ReactDOM.render(
  <React.StrictMode>
    <APIKeyContext.Provider value={WEATHER_KEY}>
      <App />
    </APIKeyContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
