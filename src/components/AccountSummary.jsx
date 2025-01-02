import React from 'react';

function AccountSummary({ account }) {
  const formattedBalance = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: account.currency,
  }).format(account.balance);

  return (
    <div className="bg-white/20 dark:bg-gray-800 p-6 rounded-3xl shadow-xl backdrop-blur-md">
      <h2 className="text-2xl font-semibold mb-4 text-white">Account Summary</h2>
      <p className="text-white mb-2">
        <strong>Account Number:</strong> {account.accountNumber}
      </p>
      <p className="text-white mb-2">
        <strong>Sort Code:</strong> {account.sortCode}
      </p>
      <p className="text-white">
        <strong>Balance:</strong> {formattedBalance}
      </p>
    </div>
  );
}

export default AccountSummary;