import React from 'react';
import PayPayeeFormContent from './PayPayeeFormContent';

function PayPayeeForm({ payees, onPayPayee, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white/20 dark:bg-gray-800 p-6 rounded-3xl shadow-xl backdrop-blur-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-white text-center">Pay a Payee</h2>
        <PayPayeeFormContent
          payees={payees}
          onPayPayee={onPayPayee}
          onCancel={onCancel}
        />
      </div>
    </div>
  );
}

export default PayPayeeForm;