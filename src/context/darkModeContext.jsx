/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false,
};

export const DarModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarModeContext.Provider>
  );
};
