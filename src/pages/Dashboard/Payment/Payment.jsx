import React from 'react';
import SecTitile from '../../../components/SecTitile';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Payment = () => {
    const stripePromise  = loadStripe('');
    return (
        <div>
            <SecTitile heading="PAYMENT" subHeading="At a Glance!"></SecTitile>
            <div>
                <Elements stripe={stripePromise}>
                    
                </Elements>
            </div>
        </div>
        
    );
};

export default Payment;