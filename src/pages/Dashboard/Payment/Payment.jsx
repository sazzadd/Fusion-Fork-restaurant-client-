import React from 'react';
import SecTitile from '../../../components/SecTitile';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise  = loadStripe(import.meta.env.VITE_Payemnt_Gateway_Pk);
    return (
        <div>
            <SecTitile heading="PAYMENT" subHeading="At a Glance!"></SecTitile>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
        
    );
};

export default Payment;