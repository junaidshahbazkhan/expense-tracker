import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initailState = {
  transactions: [],
};

// create context
export const GlobalContext = createContext(initailState);

// provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initailState);

  function deleteTransaction(id) {
    dispatch({
      type: "Delete_Transaction",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "Add_Transaction",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
