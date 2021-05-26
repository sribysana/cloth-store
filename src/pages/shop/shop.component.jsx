import React from 'react';
import {Route} from 'react-router-dom'
// import {connect} from 'react-redux';
// import {createStructuredSelector} from 'reselect';
import CollectionOverview from '../../component/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collectionPage.component'
//import {SHOP_DATA} from '../../redux/shop/shop-Data'

// import {selectShopCollections} from '../../redux/shop/shop.selector'

const Shop = ({match})=>{
        console.log('Shoppage >>>>>>>', match);
        return(<div className="shop-page">
               <h1> Shop</h1>
               <Route exact path={match.path}  component={CollectionOverview}/>
               <Route path={`${match.path}/:collectionId`}  component={CollectionPage}/>
            </div>)    
}

// const mapStateToProps= createStructuredSelector({
//     collections:selectShopCollections
// })

// const mapStateToProps= state => ({
//     collections: state.shop.collections
// })

//export default connect(mapStateToProps)(Shop);


export default Shop;