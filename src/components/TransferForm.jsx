import React from 'react';

function TransferForm({ transferAmount, setTransferAmount, handleDeposit, handleWithdraw, isLoading }) {
  return (
    <form className="space-y-4">
      <div className="mb-4">
        <label className="block text-gray-800 dark:text-white mb-2">Amount</label>
        <input
          type="number"
          step="0.01"
          min="0"
          placeholder="Enter amount"
          value={transferAmount}
          onChange={(e) => setTransferAmount(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary dark:focus:border-gray-400 dark:focus:ring-gray-400 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 box-border"
        />
      </div>
      <div className="flex space-x-4">
        <button
          type="button"
          className="flex-1 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer disabled:opacity-50"
          onClick={handleDeposit}
          disabled={isLoading}
        >
          Deposit
        </button>
        <button
          type="button"
          className="flex-1 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer disabled:opacity-50"
          onClick={handleWithdraw}
          disabled={isLoading}
        >
          Withdraw
        </button>
      </div>
    </form>
  );
}

export default TransferForm;