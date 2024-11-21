import { createSignal } from 'solid-js';
import AccountSummary from './components/AccountSummary';
import TransactionList from './components/TransactionList';
import AddPayeeForm from './components/AddPayeeForm';
import PayPayeeForm from './components/PayPayeeForm';

function App() {
  const [account, setAccount] = createSignal({
    accountNumber: '12345678',
    sortCode: '12-34-56',
    balance: 1250.75,
    currency: 'GBP',
  });

  const [transactions, setTransactions] = createSignal([
    { id: 1, date: '2023-10-01', description: 'Grocery Store', amount: -45.32, balance: 1300.07 },
    { id: 2, date: '2023-09-28', description: 'Salary', amount: 2000.00, balance: 1345.39 },
  ]);

  const [payees, setPayees] = createSignal([
    { id: 1, name: 'John Doe', accountNumber: '87654321', sortCode: '65-43-21' },
  ]);

  const [showAddPayee, setShowAddPayee] = createSignal(false);
  const [showPayPayee, setShowPayPayee] = createSignal(false);

  const handleAddPayee = (newPayee) => {
    setPayees([...payees(), { ...newPayee, id: payees().length + 1 }]);
    setShowAddPayee(false);
  };

  const handlePayPayee = (payment) => {
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

  return (
    <div class="min-h-screen bg-gradient-to-br from-primary to-secondary p-4">
      <div class="max-w-4xl mx-auto h-full">
        <h1 class="text-4xl font-bold mb-6 text-white text-center">Banking App</h1>
        <AccountSummary account={account} />
        <div class="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 my-6">
          <button
            class="bg-white/30 text-white py-2 px-6 rounded-full cursor-pointer hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setShowAddPayee(true)}
          >
            Add Payee
          </button>
          <button
            class="bg-white/30 text-white py-2 px-6 rounded-full cursor-pointer hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setShowPayPayee(true)}
          >
            Pay a Payee
          </button>
        </div>
        <TransactionList transactions={transactions} />
        {showAddPayee() && (
          <AddPayeeForm
            onAddPayee={handleAddPayee}
            onCancel={() => setShowAddPayee(false)}
          />
        )}
        {showPayPayee() && (
          <PayPayeeForm
            payees={payees}
            onPayPayee={handlePayPayee}
            onCancel={() => setShowPayPayee(false)}
          />
        )}
        <div class="mt-8 text-center">
          <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" class="text-sm text-white hover:text-gray-300">
            Made on ZAPT
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;