import { createSignal, For } from 'solid-js';

function PayPayeeFormContent(props) {
  const [payeeId, setPayeeId] = createSignal('');
  const [amount, setAmount] = createSignal('');
  const [reference, setReference] = createSignal('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedPayee = props.payees().find((p) => p.id == payeeId());
    if (selectedPayee) {
      props.onPayPayee({
        payee: selectedPayee,
        amount: parseFloat(amount()),
        reference: reference(),
      });
      setPayeeId('');
      setAmount('');
      setReference('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-4">
        <label class="block text-white mb-2">Select Payee</label>
        <select
          class="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 dark:bg-gray-700 appearance-none box-border"
          value={payeeId()}
          onInput={(e) => setPayeeId(e.target.value)}
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
      <div class="mb-4">
        <label class="block text-white mb-2">Amount</label>
        <input
          type="number"
          step="0.01"
          class="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 dark:bg-gray-700 box-border"
          value={amount()}
          onInput={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div class="mb-6">
        <label class="block text-white mb-2">Reference</label>
        <input
          type="text"
          class="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 dark:bg-gray-700 box-border"
          value={reference()}
          onInput={(e) => setReference(e.target.value)}
          required
        />
      </div>
      <div class="flex justify-end space-x-4">
        <button
          type="button"
          class="px-6 py-3 bg-white/30 text-white rounded-full hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          class="px-6 py-3 bg-white/30 text-white rounded-full hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        >
          Pay
        </button>
      </div>
    </form>
  );
}

export default PayPayeeFormContent;