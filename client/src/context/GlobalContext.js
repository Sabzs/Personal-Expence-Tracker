import React, { createContext, useEffect, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";



//initial state
const initialState = { transactions: [] }


//create context
export const GlobalContext = createContext(initialState)

//provider component
export const GlobalContextProvider = (props) => {

  const [state, dispatch] = useReducer(GlobalReducer, initialState, () => {
    const localDATA = localStorage.getItem("transactions");
    return localDATA ? JSON.parse(localDATA) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state))
  }, [state])

  //get delete transaction by :id===//
  async function deleteTransaction(id) {

    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  //get add/create new transactions===//
  async function addTransaction(transaction) {
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
      {props.children}
    </GlobalContext.Provider>
  );

}


