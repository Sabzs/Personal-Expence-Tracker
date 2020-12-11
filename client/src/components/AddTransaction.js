import React, { useState } from 'react'

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);


  return (
    <div className="addTransac" >
      <h3 className="addTransac__header" >Add new transaction</h3>
      <form className="addTransac__form" >
        <div className="addTransac__form-control">
          <label htmlfor="text">Text</label>
          <input type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="addTransac__form-control">
          <label htmlfor="amount"> Amount <br />(negative - expense, positive - income) </label>
          <input type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="addTransac__btn" >Add transaction</button>
      </form>

    </div>
  )
}