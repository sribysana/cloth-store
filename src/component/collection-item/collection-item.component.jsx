import React from 'react';
import{connect} from 'react-redux'
import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.action'

import {CollectionItemContainer, AddButton, BackgroundImage, CollectionFooterContainer,NameContainer, PriceContainer} from './collection-item.style';
//import './collection-item.style.scss';

const CollectionItem = ({items, addItem})=>{
    const {imageUrl,name,price } = items;
    return(<CollectionItemContainer>    
        <BackgroundImage imageUrl={imageUrl}/>
        <CollectionFooterContainer >
            <NameContainer >{name}</NameContainer>
            <PriceContainer>{price} $</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={()=>addItem(items)}>Add TO CART</AddButton>
    </CollectionItemContainer>)}

const mapDispatchToProps = dispatch =>{
    console.log('mapDispatchToProps ??????','CollectionItem')
    return{
    addItem: (item) => dispatch(addItem(item))
}};
export default connect(null, mapDispatchToProps )(CollectionItem);