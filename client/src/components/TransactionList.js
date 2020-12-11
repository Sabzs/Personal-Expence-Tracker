import React from 'react'

export const TransactionList = () => {
  return (
    <div className="transac-List" >
      <h3>History</h3>
      <ul className="transac-List__list">
        <li className="transac-List__minus">
          Cash <span>-$400</span><button className="transac-List__delete-btn">x</button>
        </li>
      </ul>
    </div>
  )
}