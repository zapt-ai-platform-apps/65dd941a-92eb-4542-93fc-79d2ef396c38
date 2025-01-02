import React from 'react';

function AccountSummary({ account }) {
  const formattedBalance = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: account.currency,
  }).format(account.balance);

  return (
    <div className="bg-white p-6 rounded-3xl shadow-xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Account Summary</h2>
      <p className="text-gray-800 mb-2">
        <strong>Account Number:</strong> {account.accountNumber}
      </p>
      <p className="text-gray-800 mb-2">
        <strong>Sort Code:</strong> {account.sortCode}
      </p>
      <p className="text-gray-800">
        <strong>Balance:</strong> {formattedBalance}
      </p>
    </div>
  );
}

export default AccountSummary;