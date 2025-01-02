import React, { useState } from 'react';

function CardDetails({ account }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white/20 dark:bg-gray-800 p-6 rounded-3xl shadow-xl backdrop-blur-md mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Card Details</h2>
      <button
        className="bg-white/30 text-white py-2 px-6 rounded-full cursor-pointer hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105 mb-4"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <>
          <p className="text-white mb-2">
            <strong>Card Number:</strong> {account.cardDetails.cardNumber}
          </p>
          <p className="text-white mb-2">
            <strong>Expiry Date:</strong> {account.cardDetails.expiryDate}
          </p>
          <p className="text-white">
            <strong>CVC:</strong> {account.cardDetails.cvc}
          </p>
        </>
      )}
    </div>
  );
}

export default CardDetails;