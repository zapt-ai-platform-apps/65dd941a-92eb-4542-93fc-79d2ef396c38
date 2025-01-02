import React, { useState } from 'react';
import BalanceDisplay from './BalanceDisplay';
import TransferForm from './TransferForm';
import { handleTransferToSavings, handleTransferFromSavings } from '../functions';
import { useAppState } from '../state';

function SavingsPot() {
  const { savingsPot, setSavingsPot, account, setAccount, transactions, setTransactions } = useAppState();
  const [transferAmount, setTransferAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleDeposit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const amount = parseFloat(transferAmount);
    if (amount > 0) {
      handleTransferToSavings(amount, account, setAccount, savingsPot, setSavingsPot, transactions, setTransactions);
      setTransferAmount('');
    } else {
      alert('Please enter a valid amount.');
    }
    setIsLoading(false);
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const amount = parseFloat(transferAmount);
    if (amount > 0) {
      handleTransferFromSavings(amount, account, setAccount, savingsPot, setSavingsPot, transactions, setTransactions);
      setTransferAmount('');
    } else {
      alert('Please enter a valid amount.');
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-white/20 dark:bg-gray-800 p-6 rounded-3xl shadow-xl backdrop-blur-md mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Savings Pot</h2>
      <BalanceDisplay savingsPot={savingsPot} />
      <TransferForm
        transferAmount={transferAmount}
        setTransferAmount={setTransferAmount}
        handleDeposit={handleDeposit}
        handleWithdraw={handleWithdraw}
        isLoading={isLoading}
      />
    </div>
  );
}

export default SavingsPot;