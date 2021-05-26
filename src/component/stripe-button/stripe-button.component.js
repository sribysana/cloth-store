import React  from 'react';

import StripeCheckout from 'react-stripe-checkout';

const onToken = token =>{
    console.log('token>>>>>', token)
    alert('payment Successfull')

}
const StripeCheckoutButton = ({price})=>{
    const priceForstripe = price * 100;
    const publishableKey = `pk_test_51IvNohSFvCCbKafgqRX10mAbE5s0JkuAdRaMWxWYhVRl5m5Ltijnnj0O0PKkBIjKXm4bnj5Q6hC6Cguj0u1p1KOG00meRjg2e4`;

    return(<StripeCheckout
                label='Pay Now'
                panelLabel='pay Now '
                name='Srikanth Textailes PLTD...'
                shippingAddress
                billingAddress
                email='sribysana@gmail.com'
                image='https://sendeyo.com/en/f3eb2117da'
                description={`Total is ₹ ${price}`}
                currency='INR'
                amount={priceForstripe}
                token={onToken}
                stripeKey={publishableKey}
                
        />)
}

export default StripeCheckoutButton;


