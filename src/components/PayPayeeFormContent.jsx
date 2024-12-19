import { createSignal } from 'solid-js';
import PayeeSelectField from './PayeeSelectField';
import AmountInputField from './AmountInputField';
import ReferenceInputField from './ReferenceInputField';

function PayPayeeFormContent(props) {
  const [payeeId, setPayeeId] = createSignal('');
  const [amount, setAmount] = createSignal('');
  const [reference, setReference] = createSignal('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedPayee = props.payees().find((p) => p.id == payeeId());
    if (selectedPayee) {
      props.onPayPayee({
        payee: selectedPayee,
        amount: parseFloat(amount()),
        reference: reference(),
      });
      setPayeeId('');
      setAmount('');
      setReference('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PayeeSelectField
        payeeId={payeeId}
        setPayeeId={setPayeeId}
        payees={props.payees}
      />
      <AmountInputField
        amount={amount}
        setAmount={setAmount}
      />
      <ReferenceInputField
        reference={reference}
        setReference={setReference}
      />
      <div class="flex justify-end space-x-4">
        <button
          type="button"
          class="px-6 py-3 bg-white/30 text-white rounded-full hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          class="px-6 py-3 bg-white/30 text-white rounded-full hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        >
          Pay
        </button>
      </div>
    </form>
  );
}

export default PayPayeeFormContent;