import React from 'react';

function TransactionList({ transactions }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow mt-6 overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recent Transactions</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-gray-600">Date</th>
            <th className="px-4 py-2 text-left text-gray-600">Description</th>
            <th className="px-4 py-2 text-right text-gray-600">Amount</th>
            <th className="px-4 py-2 text-right text-gray-600">Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-100 transition duration-200">
              <td className="border-t border-gray-200 px-4 py-2 text-gray-800">{transaction.date}</td>
              <td className="border-t border-gray-200 px-4 py-2 text-gray-800">{transaction.description}</td>
              <td className="border-t border-gray-200 px-4 py-2 text-right text-gray-800">
                {transaction.amount < 0 ? '-' : ''}
                {new Intl.NumberFormat('en-GB', {
                  style: 'currency',
                  currency: 'GBP',
                }).format(Math.abs(transaction.amount))}
              </td>
              <td className="border-t border-gray-200 px-4 py-2 text-right text-gray-800">
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