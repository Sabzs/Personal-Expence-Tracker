import React from 'react'

export const Transaction = ({ transaction }) => {

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}
    >
      {transaction.text}
      <span className="transac-List__span" >{sign}${Math.abs(transaction.amount)}  </span>
      <button className="transac-List__delete-btn">x</button>
    </li>
  )
}
