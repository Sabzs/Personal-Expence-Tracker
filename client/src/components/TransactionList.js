import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Transaction } from './Transaction';


export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);


  return (
    <div className="transac-List" >
      <h3>History</h3>
      <ul className="transac-List__list">
        {transactions.map(transaction => {
          return (<Transaction transaction={transaction} key={transaction.id} />)
        })}
      </ul>
    </div>
  )
}