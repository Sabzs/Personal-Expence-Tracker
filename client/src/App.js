import React from 'react'
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpence } from './components/IncomeExpence';
import { TransactionList } from './components/TransactionList';


import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <div>
        <Balance />
        <IncomeExpence />
        <TransactionList />
      </div>

    </div>
  );
}

export default App;
