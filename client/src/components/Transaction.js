import React from 'react'

export const Transaction = ({ transaction }) => {

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className="transac-List__listItem">
      {transaction.text}
      <span className="transac-List__minus" >{sign}${Math.abs(transaction.amount)}  </span>
      <button className="transac-List__delete-btn">x</button>
    </li>
  )
}
