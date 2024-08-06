'use client'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import  CheckoutForm from "@/app/ui/checkout/CheckoutForm"
import Background from '../ui/background';
import Hero from '../ui/shop/hero';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Page() {
  const options = {
    mode: "payment",
    currency:'usd',
    amount : 200,
  };

  return (
    <>
    <Background  url="../images/chackout.jpg" />
    <section  id="chekout" className='pt-[70px] px-2 md:px-8 w-full  z-10 lg:-translate-y-[150px] '>
    <Hero lable="check" style="transform translate-y-[100px] lg:translate-y-[160px] "  />
      <div className='bg-white p-32  rounded-2xl  '>
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
      </div>
    <p className=' bg-gray-200 rounded-2xl p-4  mb-4  text-center  '>
       Product and delevri  infromation will be send to email 
    </p>
    </section>
    
    </>
  );
};


