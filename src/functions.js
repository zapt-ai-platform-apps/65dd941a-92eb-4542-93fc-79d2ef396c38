import {
  account, setAccount,
  savingsPot, setSavingsPot,
  transactions, setTransactions,
  payees, setPayees,
  showAddPayee, setShowAddPayee,
  showPayPayee, setShowPayPayee
} from './signals';

export const handleAddPayee = (newPayee) => {
  setPayees([...payees(), { ...newPayee, id: payees().length + 1 }]);
  setShowAddPayee(false);
};

export const handlePayPayee = (payment) => {
  const newTransaction = {
    id: transactions().length + 1,
    date: new Date().toISOString().split('T')[0],
    description: `Payment to ${payment.payee.name}`,
    amount: -payment.amount,
    balance: account().balance - payment.amount,
  };
  setTransactions([newTransaction, ...transactions()]);
  setAccount({ ...account(), balance: account().balance - payment.amount });
  setShowPayPayee(false);
};

export const handleTransferToSavings = (amount) => {
  if (account().balance >= amount) {
    console.log(`Transferring £${amount} to savings`);
    setAccount({ ...account(), balance: account().balance - amount });
    setSavingsPot({ ...savingsPot(), balance: savingsPot().balance + amount });
    const newTransaction = {
      id: transactions().length + 1,
      date: new Date().toISOString().split('T')[0],
      description: 'Transfer to Savings Pot',
      amount: -amount,
      balance: account().balance - amount,
    };
    setTransactions([newTransaction, ...transactions()]);
  } else {
    console.error('Insufficient funds');
    alert('Insufficient funds in your main account.');
  }
};

export const handleTransferFromSavings = (amount) => {
  if (savingsPot().balance >= amount) {
    console.log(`Transferring £${amount} from savings`);
    setAccount({ ...account(), balance: account().balance + amount });
    setSavingsPot({ ...savingsPot(), balance: savingsPot().balance - amount });
    const newTransaction = {
      id: transactions().length + 1,
      date: new Date().toISOString().split('T')[0],
      description: 'Transfer from Savings Pot',
      amount: amount,
      balance: account().balance + amount,
    };
    setTransactions([newTransaction, ...transactions()]);
  } else {
    console.error('Insufficient savings');
    alert('Insufficient funds in your savings pot.');
  }
};