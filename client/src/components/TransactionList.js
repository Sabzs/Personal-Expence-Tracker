import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Transaction } from './Transaction';
// import { numberWithCommas } from "../utils/format";


export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="transac-List" >
      <h3>History</h3>
      <ul className="transac-List__list">
        {transactions.map(transaction => {
          return (<Transaction transaction={transaction} key={transaction._id} />)
        })}
      </ul>
    </div>
  )
}