function BalanceDisplay(props) {
  const savingsPot = props.savingsPot;

  return (
    <>
      <p class="text-white mb-2">
        <strong>Balance:</strong>{' '}
        {new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: savingsPot().currency,
        }).format(savingsPot().balance)}
      </p>
      <p class="text-white mb-4">
        <strong>Goal Amount:</strong>{' '}
        {new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: savingsPot().currency,
        }).format(savingsPot().goalAmount)}
      </p>
    </>
  );
}

export default BalanceDisplay;