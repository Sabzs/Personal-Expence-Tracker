import React from 'react'

export const IncomeExpence = () => {
  return (
    <div className="inc-exp-container" >
      <div className="inc-exp-container__minus-plusDiv" >
        <h4 className="inc-exp-container__plus-header" >Income</h4>
        <p className="inc-exp-container__money plus" >+0.00</p>
      </div>
      <div className="inc-exp-container__minus-plusDiv" >
        <h4 className="inc-exp-container__minus-header" >Expence</h4>
        <p className="inc-exp-container__money minus" >+0.00</p>
      </div>

    </div>
  )
}
