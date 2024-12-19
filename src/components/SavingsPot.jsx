import { createSignal } from 'solid-js';
import { savingsPot, handleTransferToSavings, handleTransferFromSavings } from '../state';
import BalanceDisplay from './BalanceDisplay';
import TransferForm from './TransferForm';

function SavingsPot() {
  const [transferAmount, setTransferAmount] = createSignal('');

  const handleDeposit = (e) => {
    e.preventDefault();
    const amount = parseFloat(transferAmount());
    if (amount > 0) {
      handleTransferToSavings(amount);
      setTransferAmount('');
    } else {
      alert('Please enter a valid amount.');
    }
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    const amount = parseFloat(transferAmount());
    if (amount > 0) {
      handleTransferFromSavings(amount);
      setTransferAmount('');
    } else {
      alert('Please enter a valid amount.');
    }
  };

  return (
    <div class="bg-white/20 dark:bg-gray-800 p-6 rounded-3xl shadow-xl backdrop-blur-md mt-6">
      <h2 class="text-2xl font-semibold mb-4 text-white">Savings Pot</h2>
      <BalanceDisplay savingsPot={savingsPot} />
      <TransferForm
        transferAmount={[transferAmount, setTransferAmount]}
        handleDeposit={handleDeposit}
        handleWithdraw={handleWithdraw}
      />
    </div>
  );
}

export default SavingsPot;