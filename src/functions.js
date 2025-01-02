import {
  setAccount,
  setSavingsPot,
  setTransactions,
  setPayees,
} from './state';

export const handleAddPayee = (newPayee, payees, setPayees) => {
  setPayees([...payees, { ...newPayee, id: payees.length + 1 }]);
};

export const handlePayPayee = (payment, transactions, setTransactions, account, setAccount, setShowPayPayee) => {
  const newTransaction = {
    id: transactions.length + 1,
    date: new Date().toISOString().split('T')[0],
    description: `Payment to ${payment.payee.name}`,
    amount: -payment.amount,
    balance: account.balance - payment.amount,
  };
  setTransactions([newTransaction, ...transactions]);
  setAccount({ ...account, balance: account.balance - payment.amount });
  setShowPayPayee(false);
};

export const handleTransferToSavings = (amount, account, setAccount, savingsPot, setSavingsPot, transactions, setTransactions) => {
  if (account.balance >= amount) {
    console.log(`Transferring £${amount} to savings`);
    setAccount({ ...account, balance: account.balance - amount });
    setSavingsPot({ ...savingsPot, balance: savingsPot.balance + amount });
    const newTransaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().split('T')[0],
      description: 'Transfer to Savings Pot',
      amount: -amount,
      balance: account.balance - amount,
    };
    setTransactions([newTransaction, ...transactions]);
  } else {
    console.error('Insufficient funds');
    alert('Insufficient funds in your main account.');
  }
};

export const handleTransferFromSavings = (amount, account, setAccount, savingsPot, setSavingsPot, transactions, setTransactions) => {
  if (savingsPot.balance >= amount) {
    console.log(`Transferring £${amount} from savings`);
    setAccount({ ...account, balance: account.balance + amount });
    setSavingsPot({ ...savingsPot, balance: savingsPot.balance - amount });
    const newTransaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().split('T')[0],
      description: 'Transfer from Savings Pot',
      amount: amount,
      balance: account.balance + amount,
    };
    setTransactions([newTransaction, ...transactions]);
  } else {
    console.error('Insufficient savings');
    alert('Insufficient funds in your savings pot.');
  }
};