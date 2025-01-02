import React, { useState } from 'react';
import PayeeForm from './PayeeForm';

function AddPayeeForm({ onAddPayee, onCancel }) {
  const [name, setName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [sortCode, setSortCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    onAddPayee({
      name,
      accountNumber,
      sortCode,
    });
    setName('');
    setAccountNumber('');
    setSortCode('');
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white/20 dark:bg-gray-800 p-6 rounded-3xl shadow-xl backdrop-blur-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-white text-center">Add New Payee</h2>
        <PayeeForm
          name={name}
          setName={setName}
          accountNumber={accountNumber}
          setAccountNumber={setAccountNumber}
          sortCode={sortCode}
          setSortCode={setSortCode}
          onSubmit={handleSubmit}
          onCancel={onCancel}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
}

export default AddPayeeForm;