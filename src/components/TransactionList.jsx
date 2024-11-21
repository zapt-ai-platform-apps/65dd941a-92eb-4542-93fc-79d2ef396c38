import { For } from 'solid-js';

function TransactionList(props) {
  return (
    <div class="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 class="text-xl font-semibold mb-4 text-blue-600">Recent Transactions</h2>
      <table class="min-w-full">
        <thead>
          <tr>
            <th class="px-4 py-2 text-left text-gray-600">Date</th>
            <th class="px-4 py-2 text-left text-gray-600">Description</th>
            <th class="px-4 py-2 text-right text-gray-600">Amount</th>
            <th class="px-4 py-2 text-right text-gray-600">Balance</th>
          </tr>
        </thead>
        <tbody>
          <For each={props.transactions()}>
            {(transaction) => (
              <tr>
                <td class="border-t px-4 py-2">{transaction.date}</td>
                <td class="border-t px-4 py-2">{transaction.description}</td>
                <td class="border-t px-4 py-2 text-right">
                  {transaction.amount < 0 ? '-' : ''}
                  {new Intl.NumberFormat('en-GB', {
                    style: 'currency',
                    currency: 'GBP',
                  }).format(Math.abs(transaction.amount))}
                </td>
                <td class="border-t px-4 py-2 text-right">
                  {new Intl.NumberFormat('en-GB', {
                    style: 'currency',
                    currency: 'GBP',
                  }).format(transaction.balance)}
                </td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;