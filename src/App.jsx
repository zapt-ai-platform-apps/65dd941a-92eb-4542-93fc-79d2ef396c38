import React from 'react';
import AccountSummary from './components/AccountSummary';
import TransactionList from './components/TransactionList';
import AddPayeeForm from './components/AddPayeeForm';
import PayPayeeForm from './components/PayPayeeForm';
import CardDetails from './components/CardDetails';
import SavingsPot from './components/SavingsPot';
import { handleAddPayee, handlePayPayee } from './functions';
import { useAppState } from './state';
import ActionButtons from './components/ActionButtons';
import Footer from './components/Footer';

function App() {
  const {
    account,
    transactions,
    payees,
    showAddPayee,
    setShowAddPayee,
    showPayPayee,
    setShowPayPayee
  } = useAppState();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-4">
      <div className="max-w-4xl mx-auto h-full">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">Banking App</h1>
        <AccountSummary account={account} />
        <CardDetails account={account} />
        <SavingsPot />
        <ActionButtons
          showAddPayee={showAddPayee}
          showPayPayee={showPayPayee}
          setShowAddPayee={setShowAddPayee}
          setShowPayPayee={setShowPayPayee}
        />
        <TransactionList transactions={transactions} />
        {showAddPayee && (
          <AddPayeeForm
            onAddPayee={handleAddPayee}
            onCancel={() => setShowAddPayee(false)}
          />
        )}
        {showPayPayee && (
          <PayPayeeForm
            payees={payees}
            onPayPayee={handlePayPayee}
            onCancel={() => setShowPayPayee(false)}
          />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;