
import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(null); 

export const StateProvider = ({ reducer, initialState, children }) => {
  const stateValue = useReducer(reducer, initialState); 
  return (
    <StateContext.Provider value={stateValue}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateValue must be used within a StateProvider");
  }
  return context;
};
