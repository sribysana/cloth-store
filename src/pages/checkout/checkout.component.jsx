import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../component/checkout-item/checkout-item.component';

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
        <div className='total'>TOTAL: ${total}</div>

    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});


export default connect(mapStateToProps)(CheckoutPage);