import React from 'react';

function AmountInputField({ amount, setAmount }) {
  return (
    <div className="mb-4">
      <label className="block text-white mb-2">Amount</label>
      <input
        type="number"
        step="0.01"
        className="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 dark:bg-gray-700 box-border"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
    </div>
  );
}

export default AmountInputField;