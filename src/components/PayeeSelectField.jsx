import React from 'react';

function PayeeSelectField({ payeeId, setPayeeId, payees }) {
  return (
    <div className="mb-4">
      <label className="block text-white mb-2">Select Payee</label>
      <select
        className="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 dark:bg-gray-700 appearance-none box-border"
        value={payeeId}
        onChange={(e) => setPayeeId(e.target.value)}
        required
      >
        <option value="" disabled>Select a payee</option>
        {payees.map((payee) => (
          <option key={payee.id} value={payee.id}>
            {payee.name} - {payee.accountNumber} ({payee.sortCode})
          </option>
        ))}
      </select>
    </div>
  );
}

export default PayeeSelectField;