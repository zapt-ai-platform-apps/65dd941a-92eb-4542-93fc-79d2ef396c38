import { createSignal } from 'solid-js';

function AddPayeeForm(props) {
  const [name, setName] = createSignal('');
  const [accountNumber, setAccountNumber] = createSignal('');
  const [sortCode, setSortCode] = createSignal('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddPayee({
      name: name(),
      accountNumber: accountNumber(),
      sortCode: sortCode(),
    });
    setName('');
    setAccountNumber('');
    setSortCode('');
  };

  return (
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-xl font-semibold mb-4 text-blue-600">Add New Payee</h2>
        <form onSubmit={handleSubmit}>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              class="w-full p-2 border border-gray-300 rounded cursor-pointer box-border"
              value={name()}
              onInput={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Account Number</label>
            <input
              type="text"
              class="w-full p-2 border border-gray-300 rounded cursor-pointer box-border"
              value={accountNumber()}
              onInput={(e) => setAccountNumber(e.target.value)}
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Sort Code</label>
            <input
              type="text"
              class="w-full p-2 border border-gray-300 rounded cursor-pointer box-border"
              value={sortCode()}
              onInput={(e) => setSortCode(e.target.value)}
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
              class="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              Add Payee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPayeeForm;