import React from 'react'

export const AddTransaction = () => {
  return (
    <div className="addTransac" >
      <h3 className="addTransac__header" >Add new transaction</h3>
      <form className="addTransac__form" >
        <div className="addTransac__form-control">
          <label htmlfor="text">Text</label>
          <input type="text" placeholder="Enter text..." />
        </div>
        <div className="addTransac__form-control">
          <label htmlfor="amount"
          >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="addTransac__btn" >Add transaction</button>
      </form>

    </div>
  )
}