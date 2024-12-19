import PayPayeeFormContent from './PayPayeeFormContent';

function PayPayeeForm(props) {
  return (
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white/20 dark:bg-gray-800 p-6 rounded-3xl shadow-xl backdrop-blur-md w-full max-w-md">
        <h2 class="text-2xl font-semibold mb-6 text-white text-center">Pay a Payee</h2>
        <PayPayeeFormContent
          payees={props.payees}
          onPayPayee={props.onPayPayee}
          onCancel={props.onCancel}
        />
      </div>
    </div>
  );
}

export default PayPayeeForm;