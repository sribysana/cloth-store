import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux'
// import {connect} from 'react-redux';
// import {createStructuredSelector} from 'reselect';
import CollectionOverview from '../../component/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collectionPage.component';
import {fireStore, convertCollectionSnapshotToMap} from '../../firebase/firebase.util';
import {updatecollection} from '../../redux/shop/shop.actions'
//import {SHOP_DATA} from '../../redux/shop/shop-Data'

// import {selectShopCollections} from '../../redux/shop/shop.selector'

class Shop extends Component{
        unsubscriptFromSanpshot= null;
        componentDidMount(){
                const {updatecollection}= this.props;
                
                const collectionRef= fireStore.collection('collections');
                collectionRef.onSnapshot(async snapshot=>{
                        console.log('shop snapshot >>>>>', snapshot.id);
                        //alert(snapshot.id)
                        const collectionsMap =  convertCollectionSnapshotToMap(snapshot);
                        //alert(JSON.stringify(collectionsMap));
                        updatecollection(collectionsMap);
                })
        }
        componentWillUnmount(){
                //this.unsubscriptFromSanpshot()
        }
        render(){
                const {match}= this.props
                return(<div className="shop-page">
                <h1> Shop</h1>
                <Route exact path={match.path}  component={CollectionOverview}/>
                <Route path={`${match.path}/:collectionId`}  component={CollectionPage}/>
                </div>)
        }
} 




// const mapStateToProps= createStructuredSelector({
//     collections:selectShopCollections
// })

// const mapStateToProps= state => ({
//     collections: state.shop.collections
// })

//export default connect(mapStateToProps)(Shop);

const mapDispatchToProps = dispatch => ({
        updatecollection: collectionsMap => dispatch(updatecollection(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);