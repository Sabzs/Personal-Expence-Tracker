import React, { createContext, useEffect, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";
// import { v4 as uuidv4 } from 'uuid';


//initial state
const initialState = { transactions: [] }


//create context
export const GlobalContext = createContext(initialState)

//provider component
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState, () => {
    const localDATA = localStorage.getItem("transactions");
    return localDATA ? JSON.parse(localDATA) : initialState;
  });


  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state))
  }, [state])


  //actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }


  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      { children}
    </GlobalContext.Provider>
  );

}


