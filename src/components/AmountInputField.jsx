function AmountInputField(props) {
  return (
    <div class="mb-4">
      <label class="block text-white mb-2">Amount</label>
      <input
        type="number"
        step="0.01"
        class="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 dark:bg-gray-700 box-border"
        value={props.amount()}
        onInput={(e) => props.setAmount(e.target.value)}
        required
      />
    </div>
  );
}

export default AmountInputField;