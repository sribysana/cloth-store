import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../component/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component'

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector'

import './checkout.styles.scss';

const CheckoutPage =  ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="checkout-block">
                <span>Product</span>
            </div>
            <div className="checkout-block">
                <span>Description</span>
            </div>
            <div className="checkout-block">
                <span>Quantity</span>
            </div>
            <div className="checkout-block">
                <span>Price</span>
            </div>
            <div className="checkout-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems&&
            cartItems.map((i)=><CheckoutItem key={i.id} item = {i}/>)
        }
        <div className="total">TOTAL: ${total}</div>
        <div className="test-warning">
            * Please user the fallowing test creadit card for payments *
            <br/>


            4242 4242 4242 4242 - EXP: 01/22 CVV: 123
        </div>
        <StripeCheckoutButton  price={total}/>

        
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});


export default connect(mapStateToProps)(CheckoutPage);