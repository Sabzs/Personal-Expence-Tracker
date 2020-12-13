import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";
import { v4 as uuidv4 } from 'uuid';


//initial state
const initialState = {
  transactions: [
    { id: uuidv4(), text: "Salary", amount: 400 },
    { id: uuidv4(), text: "Book", amount: -20 },
  ]
}

//create context
export const GlobalContext = createContext(initialState)

//provider component
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

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


