import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import { numberWithCommas } from "../utils/format";


export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);


  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span className="transac-List__span" >{sign}${numberWithCommas(Math.abs(transaction.amount))}  </span>
      <button className="transac-List__delete-btn" onClick={() => deleteTransaction(transaction._id)} >x</button>

    </li>
  )
}
