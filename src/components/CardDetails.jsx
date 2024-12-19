function CardDetails(props) {
  return (
    <div class="bg-white/20 dark:bg-gray-800 p-6 rounded-3xl shadow-xl backdrop-blur-md mt-6">
      <h2 class="text-2xl font-semibold mb-4 text-white">Card Details</h2>
      <p class="text-white mb-2">
        <strong>Card Number:</strong> {props.account().cardDetails.cardNumber}
      </p>
      <p class="text-white mb-2">
        <strong>Expiry Date:</strong> {props.account().cardDetails.expiryDate}
      </p>
      <p class="text-white">
        <strong>CVC:</strong> {props.account().cardDetails.cvc}
      </p>
    </div>
  );
}

export default CardDetails;