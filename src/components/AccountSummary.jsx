import { createMemo } from 'solid-js';

function AccountSummary(props) {
  const formattedBalance = createMemo(() =>
    new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: props.account().currency,
    }).format(props.account().balance)
  );

  return (
    <div class="bg-white/20 p-6 rounded-3xl shadow-xl backdrop-blur-md">
      <h2 class="text-2xl font-semibold mb-4 text-white">Account Summary</h2>
      <p class="text-white mb-2">
        <strong>Account Number:</strong> {props.account().accountNumber}
      </p>
      <p class="text-white mb-2">
        <strong>Sort Code:</strong> {props.account().sortCode}
      </p>
      <p class="text-white">
        <strong>Balance:</strong> {formattedBalance()}
      </p>
    </div>
  );
}

export default AccountSummary;