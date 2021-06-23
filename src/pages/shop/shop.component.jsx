import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux'
// import {connect} from 'react-redux';
// import {createStructuredSelector} from 'reselect';
import CollectionOverview from '../../component/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collectionPage.component';
import {fireStore, convertCollectionSnapshotToMap} from '../../firebase/firebase.util';
import {updatecollection} from '../../redux/shop/shop.actions';
import Withspinner from '../../component/with-spinner/with-spinner.component';

//import {SHOP_DATA} from '../../redux/shop/shop-Data'
// import {selectShopCollections} from '../../redux/shop/shop.selector'

const CollectionOverviewWithSpinner = Withspinner(CollectionOverview);
const CollectionPageWithSpinner = Withspinner(CollectionPage);
class Shop extends Component{
        state = {
                loading:true,
        }
        unsubscriptFromSanpshot= null;
        componentDidMount(){
                const {updatecollection}= this.props;
                
                const collectionRef= fireStore.collection('collections');
              //  collectionRef.onSnapshot(async snapshot=>{  //observer pattern

                collectionRef.get().then( snapshot => {  // promiss pattern 
                        
                        const collectionsMap =  convertCollectionSnapshotToMap(snapshot);
                        //alert(JSON.stringify(collectionsMap));
                        //debugger;
                        updatecollection(collectionsMap);
                        this.setState({ loading: false });
                })
        }
        componentWillUnmount(){
                //this.unsubscriptFromSanpshot()
        }
        render(){
                const {loading} = this.state
                const {match}= this.props
                return(<div className="shop-page">
                <h1> Shop</h1>
                <Route exact path={match.path}  render={(props)=><CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`}  render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
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