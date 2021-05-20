import React from 'react';
import {connect} from 'react-redux';

import {clearItem, removeItem, addItem} from '../../redux/cart/cart.action'

import './checkout-item.styles.scss';

// 
 const CheckoutItem = ({item, dispatch})=>{
//    const CheckoutItem = (props)=>{
 //   console.log('props>>>>>',props);
   const {imageUrl, name, quantity, price, id}=item;
    return (
<div className="checkout-item">
    <div className="image-container">
        <img src={imageUrl} alt='item'/>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
        <span className="arrow" onClick={()=>dispatch(removeItem(id))}>&#10094;</span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={()=>dispatch(addItem(item))}>&#10095;</span>
    </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={()=>{dispatch(clearItem(id))}}>&#10005;</div>
</div>)}

export default connect()(CheckoutItem);