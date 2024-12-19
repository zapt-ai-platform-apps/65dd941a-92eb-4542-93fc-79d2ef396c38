function TransferForm(props) {
  const [transferAmount, setTransferAmount] = props.transferAmount;

  return (
    <form class="space-y-4">
      <input
        type="number"
        step="0.01"
        min="0"
        placeholder="Enter amount"
        value={transferAmount()}
        onInput={(e) => setTransferAmount(e.target.value)}
        class="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 box-border"
      />
      <div class="flex space-x-4">
        <button
          type="button"
          class="flex-1 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          onClick={props.handleDeposit}
        >
          Deposit
        </button>
        <button
          type="button"
          class="flex-1 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          onClick={props.handleWithdraw}
        >
          Withdraw
        </button>
      </div>
    </form>
  );
}

export default TransferForm;