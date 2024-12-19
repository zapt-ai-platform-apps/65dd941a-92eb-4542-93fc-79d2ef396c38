import { createSignal, Show } from 'solid-js';

function CardDetails(props) {
  const [showDetails, setShowDetails] = createSignal(false);

  return (
    <div class="bg-white/20 dark:bg-gray-800 p-6 rounded-3xl shadow-xl backdrop-blur-md mt-6">
      <h2 class="text-2xl font-semibold mb-4 text-white">Card Details</h2>
      <button
        class="bg-white/30 text-white py-2 px-6 rounded-full cursor-pointer hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105 mb-4"
        onClick={() => setShowDetails(!showDetails())}
      >
        {showDetails() ? 'Hide Details' : 'Show Details'}
      </button>
      <Show when={showDetails()}>
        <p class="text-white mb-2">
          <strong>Card Number:</strong> {props.account().cardDetails.cardNumber}
        </p>
        <p class="text-white mb-2">
          <strong>Expiry Date:</strong> {props.account().cardDetails.expiryDate}
        </p>
        <p class="text-white">
          <strong>CVC:</strong> {props.account().cardDetails.cvc}
        </p>
      </Show>
    </div>
  );
}

export default CardDetails;