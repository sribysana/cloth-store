import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCart} from '../../redux/cart/cart.action';
import {selectCartCount} from '../../redux/cart/cart.selector';
import {ReactComponent as ShoppingIcon} from '../../assets/images/shopping-bag.svg';

import './cart-icon.style.scss';

const CartIcon = ({toggleCart, itemCount}) => {
    return (<div className="cart-icon" onClick={toggleCart}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">{itemCount}</span>
    </div>)
}

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart()),
})
  
const mapStateToProps = createStructuredSelector ({
        itemCount: selectCartCount,    
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);