import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";
import axios from "axios";
// import { v4 as uuidv4 } from 'uuid';


//initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true
}

//create context
export const GlobalContext = createContext(initialState)

//provider component
export const GlobalContextProvider = (props) => {

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  //ACTIONS==//
  //get all transactions===//
  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");
      dispatch({
        type: "GET_TRANSACTION",
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.res.data.error
      })
    }
  }

  //get delete transaction by :id===//
  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.res.data.error
      })
    }
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  //get add/create new transactions===//
  async function addTransaction(transaction) {
    const config = {
      headers: { "Content-type": "application/json" }
    }
    try {
      const res = await axios.post("/api/v1/transactions", transaction, config)
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.res.data.error
      })
    }
  }


  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      loading: state.loading,
      error: state.error,
      getTransactions,
      deleteTransaction,
      addTransaction
    }}>
      { props.children}
    </GlobalContext.Provider>
  );

}


