import {shopActionTypes} from './shop.types';

export const updatecollection = (collection)=>{
    //alert(shopActionTypes.UPDATE_COLLECTIONS+ '----- shop action')
    return {
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: collection
}}