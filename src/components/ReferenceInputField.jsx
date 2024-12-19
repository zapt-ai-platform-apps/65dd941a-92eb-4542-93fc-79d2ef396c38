function ReferenceInputField(props) {
  return (
    <div class="mb-6">
      <label class="block text-white mb-2">Reference</label>
      <input
        type="text"
        class="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 dark:bg-gray-700 box-border"
        value={props.reference()}
        onInput={(e) => props.setReference(e.target.value)}
        required
      />
    </div>
  );
}

export default ReferenceInputField;