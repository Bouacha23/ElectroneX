import {PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  return (
    <form>
      <PaymentElement />
      <button className='w-full rounded-xl mt-4 p-4 bg-black text-white hover:bg-white hover:text-black border border-white hover:border-black border-2'>Submit</button>
    </form>
  );
};

export default CheckoutForm;