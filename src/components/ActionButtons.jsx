import React from 'react';

function ActionButtons({ showAddPayee, showPayPayee, setShowAddPayee, setShowPayPayee }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 my-6">
      <button
        className="bg-white/30 text-white py-2 px-6 rounded-full cursor-pointer hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() => setShowAddPayee(true)}
        disabled={showAddPayee || showPayPayee}
      >
        Add Payee
      </button>
      <button
        className="bg-white/30 text-white py-2 px-6 rounded-full cursor-pointer hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() => setShowPayPayee(true)}
        disabled={showAddPayee || showPayPayee}
      >
        Pay a Payee
      </button>
    </div>
  );
}

export default ActionButtons;