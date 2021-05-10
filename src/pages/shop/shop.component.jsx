import React, {Component} from 'react';
import CollectionPreview from '../../component/collection-preview/collection-preview.component'
import {SHOP_DATA} from './shop-Data'


class Shop extends Component{
    constructor(props){
        super(props);
        this.state={
            collections: SHOP_DATA
        }
    }
    render(){
        const {collections}=this.state
        return(<div className="shop-page">
               <h1> Shop</h1>
               <div>
                {
                    collections.map(({id, ...c})=><CollectionPreview key={id} {...c}/>)
                }
               </div>
            </div>)
    }
}

export default Shop;