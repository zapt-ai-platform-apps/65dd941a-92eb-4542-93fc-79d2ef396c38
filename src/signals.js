import { createSignal } from 'solid-js';

export const [account, setAccount] = createSignal({
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

export const [savingsPot, setSavingsPot] = createSignal({
  name: 'Savings Pot',
  balance: 500.0,
  currency: 'GBP',
  goalAmount: 1000.0,
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