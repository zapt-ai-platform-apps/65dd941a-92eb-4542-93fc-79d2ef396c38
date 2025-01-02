import React, { useState } from 'react';

function CardDetails({ account }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white p-6 rounded-3xl shadow mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Card Details</h2>
      <button
        className="bg-blue-500 text-white py-2 px-6 rounded-full cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 mb-4"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <>
          <p className="text-gray-800 mb-2">
            <strong>Card Number:</strong> {account.cardDetails.cardNumber}
          </p>
          <p className="text-gray-800 mb-2">
            <strong>Expiry Date:</strong> {account.cardDetails.expiryDate}
          </p>
          <p className="text-gray-800">
            <strong>CVC:</strong> {account.cardDetails.cvc}
          </p>
        </>
      )}
    </div>
  );
}

export default CardDetails;