import React from 'react';

import {connect} from 'react-redux';

import CollectionItem from '../../component/collection-item/collection-item.component';

//import {selectCollection1} from '../../redux/shop/shop.selector';
import {selectCollection} from '../../redux/shop/shop.selector';


import './collectionPage.styles.scss';

const CollectionPage = (props)=>{
    debugger;
    const {items, title} = props.collection;
    return (
    <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
            {items.map((i)=><CollectionItem items={i} key={i.id}/>)}
        </div>
    </div>
)}

const mapStateToprops = (state, ownProps)=>{   
    return {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
}}

export default connect(mapStateToprops)(CollectionPage);