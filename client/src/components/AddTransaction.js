import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import { v4 as uuidv4 } from 'uuid';

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      text,
      amount: +amount //the "+amount" will make sure total is not added as a string//
    }
    addTransaction(newTransaction)
  }


  return (
    <div className="addTransac"  >

      <h3 className="addTransac__header" >Add new transaction</h3>

      <form className="addTransac__form" onSubmit={onSubmit} >
        <div className="addTransac__form-control">
          <label className="addTransac__label"
            htmlFor="text"  >Text</label>
          <input className="addTransac__inputInfo"
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="addTransac__form-control">
          <label className="addTransac__label"
            htmlFor="amount"> Amount <br />(negative - expense, positive - income) </label>
          <input className="addTransac__inputInfo"
            type="number"
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
