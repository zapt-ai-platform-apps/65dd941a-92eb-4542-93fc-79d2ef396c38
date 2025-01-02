import React from 'react';

function ReferenceInputField({ reference, setReference }) {
  return (
    <div className="mb-6">
      <label className="block text-white mb-2">Reference</label>
      <input
        type="text"
        className="w-full p-3 border border-white/30 rounded-full focus:outline-none focus:border-white focus:ring-2 focus:ring-white text-white bg-white/10 dark:bg-gray-700 box-border"
        value={reference}
        onChange={(e) => setReference(e.target.value)}
        required
      />
    </div>
  );
}

export default ReferenceInputField;