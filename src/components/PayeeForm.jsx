function PayeeForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div class="mb-4">
        <label class="block text-white mb-2">Name</label>
        <input
          type="text"
          class="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 dark:bg-gray-700 box-border"
          value={props.name()}
          onInput={(e) => props.setName(e.target.value)}
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-white mb-2">Account Number</label>
        <input
          type="text"
          class="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 dark:bg-gray-700 box-border"
          value={props.accountNumber()}
          onInput={(e) => props.setAccountNumber(e.target.value)}
          required
        />
      </div>
      <div class="mb-6">
        <label class="block text-white mb-2">Sort Code</label>
        <input
          type="text"
          class="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 dark:bg-gray-700 box-border"
          value={props.sortCode()}
          onInput={(e) => props.setSortCode(e.target.value)}
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
          Add Payee
        </button>
      </div>
    </form>
  );
}

export default PayeeForm;