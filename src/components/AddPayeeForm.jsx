import { createSignal } from 'solid-js';
import PayeeForm from './PayeeForm';

function AddPayeeForm(props) {
  const [name, setName] = createSignal('');
  const [accountNumber, setAccountNumber] = createSignal('');
  const [sortCode, setSortCode] = createSignal('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddPayee({
      name: name(),
      accountNumber: accountNumber(),
      sortCode: sortCode(),
    });
    setName('');
    setAccountNumber('');
    setSortCode('');
  };

  return (
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white/20 dark:bg-gray-800 p-6 rounded-3xl shadow-xl backdrop-blur-md w-full max-w-md">
        <h2 class="text-2xl font-semibold mb-6 text-white text-center">Add New Payee</h2>
        <PayeeForm
          name={name}
          setName={setName}
          accountNumber={accountNumber}
          setAccountNumber={setAccountNumber}
          sortCode={sortCode}
          setSortCode={setSortCode}
          onSubmit={handleSubmit}
          onCancel={props.onCancel}
        />
      </div>
    </div>
  );
}

export default AddPayeeForm;