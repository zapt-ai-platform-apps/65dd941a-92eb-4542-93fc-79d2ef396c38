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
      <p className="text-white mb-2">
        <strong>Balance:</strong> {formattedBalance}
      </p>
      <p className="text-white mb-4">
        <strong>Goal Amount:</strong> {formattedGoal}
      </p>
    </>
  );
}

export default BalanceDisplay;