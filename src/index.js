import React from "react";
import ReactDOM from "react-dom";
import App from "./pages";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,

  document.getElementById("root")
);