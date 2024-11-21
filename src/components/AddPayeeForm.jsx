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
      <div class="bg-white/20 p-6 rounded-3xl shadow-xl backdrop-blur-md w-full max-w-md">
        <h2 class="text-2xl font-semibold mb-6 text-white text-center">Add New Payee</h2>
        <form onSubmit={handleSubmit}>
          <div class="mb-4">
            <label class="block text-white mb-2">Name</label>
            <input
              type="text"
              class="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 box-border"
              value={name()}
              onInput={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-white mb-2">Account Number</label>
            <input
              type="text"
              class="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 box-border"
              value={accountNumber()}
              onInput={(e) => setAccountNumber(e.target.value)}
              required
            />
          </div>
          <div class="mb-6">
            <label class="block text-white mb-2">Sort Code</label>
            <input
              type="text"
              class="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 box-border"
              value={sortCode()}
              onInput={(e) => setSortCode(e.target.value)}
              required
            />
          </div>
          <div class="flex justify-end space-x-4">
            <button
              type="button"
              class="px-6 py-3 bg-white/30 text-white rounded-full cursor-pointer hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={props.onCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-6 py-3 bg-white/30 text-white rounded-full cursor-pointer hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105"
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