import React from 'react';

function BalanceDisplay({ savingsPot }) {
  const formattedBalance = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: savingsPot.currency,
  }).format(savingsPot.balance);

  const formattedGoal = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: savingsPot.currency,
  }).format(savingsPot.goalAmount);

  return (
    <>
      <p className="text-gray-800 mb-2">
        <strong>Balance:</strong> {formattedBalance}
      </p>
      <p className="text-gray-800 mb-4">
        <strong>Goal Amount:</strong> {formattedGoal}
      </p>
    </>
  );
}

export default BalanceDisplay;