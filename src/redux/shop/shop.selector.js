import memoize from 'lodash.memoize';
import {createSelector} from 'reselect';


const shopSelector = state=>state.shop;

export const selectShopCollections = createSelector(shopSelector,shop => shop.collections);

export const selectCollectionForPreview = createSelector(selectShopCollections, collections => collections? Object.keys(collections).map((key)=>collections[key]):[])

// export const selectCollection = memoize(urlParam => createSelector(
//     selectShopCollections, 
//     collections => collections.find( i=> i.id === COLLECTION_ID_MAP[urlParam])
//     )
//     )

export const selectCollection1 = urlParam => createSelector(
    selectShopCollections, 
    collections => (collections ? collections[urlParam]: null)
    )
    
    


    export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );