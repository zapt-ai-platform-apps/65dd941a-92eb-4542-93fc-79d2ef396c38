import React from 'react';

function TransactionList({ transactions }) {
  return (
    <div className="bg-white/20 dark:bg-gray-800 p-6 rounded-3xl shadow-xl backdrop-blur-md mt-6 overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4 text-white">Recent Transactions</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-white/80">Date</th>
            <th className="px-4 py-2 text-left text-white/80">Description</th>
            <th className="px-4 py-2 text-right text-white/80">Amount</th>
            <th className="px-4 py-2 text-right text-white/80">Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-white/10 transition duration-200">
              <td className="border-t border-white/20 px-4 py-2 text-white">{transaction.date}</td>
              <td className="border-t border-white/20 px-4 py-2 text-white">{transaction.description}</td>
              <td className="border-t border-white/20 px-4 py-2 text-right text-white">
                {transaction.amount < 0 ? '-' : ''}
                {new Intl.NumberFormat('en-GB', {
                  style: 'currency',
                  currency: 'GBP',
                }).format(Math.abs(transaction.amount))}
              </td>
              <td className="border-t border-white/20 px-4 py-2 text-right text-white">
                {new Intl.NumberFormat('en-GB', {
                  style: 'currency',
                  currency: 'GBP',
                }).format(transaction.balance)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;