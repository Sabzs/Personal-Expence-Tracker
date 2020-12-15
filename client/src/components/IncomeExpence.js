import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { numberWithCommas } from "../utils/format";


export const IncomeExpence = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount)
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2)


  return (
    <div className="inc-exp-container" >
      <div className="inc-exp-container__minus-plusDiv" >
        <h4 className="inc-exp-container__plus-header" >Income</h4>
        <p className="inc-exp-container__money--plus" >${numberWithCommas(income)}</p>
      </div>
      <div className="inc-exp-container__minus-plusDiv" >
        <h4 className="inc-exp-container__minus-header" >Expense</h4>
        <p className="inc-exp-container__money--minus" >${numberWithCommas(expense)}</p>
      </div>

    </div>
  )
}
