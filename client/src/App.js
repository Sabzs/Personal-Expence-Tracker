import React from 'react'
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpence } from './components/IncomeExpence';
import { TransactionList } from './components/TransactionList';


import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <div className >
        <Balance />
        <IncomeExpence />
        <TransactionList />
        <AddTransaction />
      </div>

    </div>
  );
}

export default App;
