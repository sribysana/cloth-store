import React from 'react';

import './checkout-item.styles.scss';

// 
const CheckoutItem = ({item:{imageUrl, name, quantity, price}})=>{
    //console.log('props>>>>>',props);
    //const {imageUrl, name, quantity, price}=props;
    return (
<div className="checkout-item">
    <div className="image-container">
        <img src={imageUrl} alt='item'/>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={()=>{}}>&#10005;</div>
</div>)}

export default CheckoutItem;