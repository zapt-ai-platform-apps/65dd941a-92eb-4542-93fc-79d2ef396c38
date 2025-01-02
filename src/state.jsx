import React, { createContext, useContext, useState } from 'react';

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [account, setAccount] = useState({
    accountNumber: '12345678',
    sortCode: '12-34-56',
    balance: 1250.75,
    currency: 'GBP',
    cardDetails: {
      cardNumber: '1234 5678 9012 3456',
      expiryDate: '12/25',
      cvc: '123',
    },
  });

  const [savingsPot, setSavingsPot] = useState({
    name: 'Savings Pot',
    balance: 500.0,
    currency: 'GBP',
    goalAmount: 1000.0,
  });

  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-10-01', description: 'Grocery Store', amount: -45.32, balance: 1300.07 },
    { id: 2, date: '2023-09-28', description: 'Salary', amount: 2000.0, balance: 1345.39 },
  ]);

  const [payees, setPayees] = useState([
    { id: 1, name: 'John Doe', accountNumber: '87654321', sortCode: '65-43-21' },
  ]);

  const [showAddPayee, setShowAddPayee] = useState(false);
  const [showPayPayee, setShowPayPayee] = useState(false);

  return (
    <AppStateContext.Provider value={{
      account, setAccount,
      savingsPot, setSavingsPot,
      transactions, setTransactions,
      payees, setPayees,
      showAddPayee, setShowAddPayee,
      showPayPayee, setShowPayPayee
    }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);