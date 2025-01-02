import React from 'react';

function PayeeForm({ name, setName, accountNumber, setAccountNumber, sortCode, setSortCode, onSubmit, onCancel, isSubmitting }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="block text-white mb-2">Name</label>
        <input
          type="text"
          className="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 dark:bg-gray-700 box-border"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Account Number</label>
        <input
          type="text"
          className="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 dark:bg-gray-700 box-border"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-white mb-2">Sort Code</label>
        <input
          type="text"
          className="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 dark:bg-gray-700 box-border"
          value={sortCode}
          onChange={(e) => setSortCode(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-6 py-3 bg-white/30 text-white rounded-full hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-3 bg-white/30 text-white rounded-full hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          disabled={isSubmitting}
        >
          Add Payee
        </button>
      </div>
    </form>
  );
}

export default PayeeForm;