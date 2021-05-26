import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import {selectShopCollections, selectCollectionForPreview} from '../../redux/shop/shop.selector'

import './collections-overview.style.scss';

const CollectionOverview = ({collections}) => {
    return (<div className="collections-overview">
        {
            collections.map(({id, ...c})=><CollectionPreview key={id} {...c}/>)
        }
    </div>)
}


const mapStateToProps= createStructuredSelector({
    collections:selectCollectionForPreview
})


export default connect(mapStateToProps)(CollectionOverview);