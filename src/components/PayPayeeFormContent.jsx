import React, { useState } from 'react';
import PayeeSelectField from './PayeeSelectField';
import AmountInputField from './AmountInputField';
import ReferenceInputField from './ReferenceInputField';

function PayPayeeFormContent({ payees, onPayPayee, onCancel }) {
  const [payeeId, setPayeeId] = useState('');
  const [amount, setAmount] = useState('');
  const [reference, setReference] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const selectedPayee = payees.find((p) => p.id === parseInt(payeeId));
    if (selectedPayee) {
      onPayPayee({
        payee: selectedPayee,
        amount: parseFloat(amount),
        reference,
      });
      setPayeeId('');
      setAmount('');
      setReference('');
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PayeeSelectField
        payeeId={payeeId}
        setPayeeId={setPayeeId}
        payees={payees}
      />
      <AmountInputField
        amount={amount}
        setAmount={setAmount}
      />
      <ReferenceInputField
        reference={reference}
        setReference={setReference}
      />
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-6 py-3 bg-white/30 text-white rounded-full hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-3 bg-white/30 text-white rounded-full hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          disabled={isSubmitting}
        >
          Pay
        </button>
      </div>
    </form>
  );
}

export default PayPayeeFormContent;