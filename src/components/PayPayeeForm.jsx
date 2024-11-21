import { createSignal, For } from 'solid-js';

function PayPayeeForm(props) {
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
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-xl font-semibold mb-4 text-blue-600">Pay a Payee</h2>
        <form onSubmit={handleSubmit}>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Select Payee</label>
            <select
              class="w-full p-2 border border-gray-300 rounded cursor-pointer box-border"
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
            <label class="block text-gray-700 mb-2">Amount</label>
            <input
              type="number"
              step="0.01"
              class="w-full p-2 border border-gray-300 rounded cursor-pointer box-border"
              value={amount()}
              onInput={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Reference</label>
            <input
              type="text"
              class="w-full p-2 border border-gray-300 rounded cursor-pointer box-border"
              value={reference()}
              onInput={(e) => setReference(e.target.value)}
              required
            />
          </div>
          <div class="flex justify-end space-x-4">
            <button
              type="button"
              class="px-4 py-2 bg-gray-500 text-white rounded cursor-pointer"
              onClick={props.onCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PayPayeeForm;