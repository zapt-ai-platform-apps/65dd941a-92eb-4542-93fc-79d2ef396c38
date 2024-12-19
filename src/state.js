import { createSignal } from 'solid-js';

export const [account, setAccount] = createSignal({
  accountNumber: '12345678',
  sortCode: '12-34-56',
  balance: 1250.75,
  currency: 'GBP',
});

export const [transactions, setTransactions] = createSignal([
  { id: 1, date: '2023-10-01', description: 'Grocery Store', amount: -45.32, balance: 1300.07 },
  { id: 2, date: '2023-09-28', description: 'Salary', amount: 2000.0, balance: 1345.39 },
]);

export const [payees, setPayees] = createSignal([
  { id: 1, name: 'John Doe', accountNumber: '87654321', sortCode: '65-43-21' },
]);

export const [showAddPayee, setShowAddPayee] = createSignal(false);
export const [showPayPayee, setShowPayPayee] = createSignal(false);

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