import React from 'react'
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpence } from './components/IncomeExpence';
import { TransactionList } from './components/TransactionList';
import { GlobalContextProvider } from './context/GlobalContext';

import './styles/App.css';



function App() {
  return (

    <GlobalContextProvider>
      <div className="App">
        <Header />

        <div className >
          <Balance />
          <IncomeExpence />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>

    </GlobalContextProvider>

  );
}

export default App;
