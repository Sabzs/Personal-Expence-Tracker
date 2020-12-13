import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);




  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}
    >
      {transaction.text}
      <span className="transac-List__span" >{sign}${Math.abs(transaction.amount)}  </span>
      <button className="transac-List__delete-btn" onClick={() => deleteTransaction(transaction.id)} >x</button>

    </li>
  )
}
