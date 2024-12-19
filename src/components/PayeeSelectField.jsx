import { For } from 'solid-js';

function PayeeSelectField(props) {
  return (
    <div class="mb-4">
      <label class="block text-white mb-2">Select Payee</label>
      <select
        class="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 dark:bg-gray-700 appearance-none box-border"
        value={props.payeeId()}
        onInput={(e) => props.setPayeeId(e.target.value)}
        required
      >
        <option value="" disabled>Select a payee</option>
        <For each={props.payees()}>
          {(payee) => (
            <option value={payee.id}>
              {payee.name} - {payee.accountNumber} ({payee.sortCode})
            </option>
          )}
        </For>
      </select>
    </div>
  );
}

export default PayeeSelectField;