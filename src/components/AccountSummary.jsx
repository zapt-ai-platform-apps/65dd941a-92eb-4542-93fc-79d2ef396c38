import { createMemo } from 'solid-js';

function AccountSummary(props) {
  const formattedBalance = createMemo(() =>
    new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: props.account().currency,
    }).format(props.account().balance)
  );

  return (
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4 text-blue-600">Account Summary</h2>
      <p class="text-gray-700">
        <strong>Account Number:</strong> {props.account().accountNumber}
      </p>
      <p class="text-gray-700">
        <strong>Sort Code:</strong> {props.account().sortCode}
      </p>
      <p class="text-gray-700">
        <strong>Balance:</strong> {formattedBalance()}
      </p>
    </div>
  );
}

export default AccountSummary;