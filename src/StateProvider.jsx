import React, { createContext, useContext, useReducer } from "react";
import App from "./pages";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, childern }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    <App />
    {childern}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
