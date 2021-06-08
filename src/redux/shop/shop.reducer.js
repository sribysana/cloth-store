import {SHOP_DATA} from './shop-Data';
import {shopActionTypes} from './shop.types';

 

const innitialState={
    collections:SHOP_DATA
}

export const shopReducer = (state=innitialState, action)=>{
    switch(action.type){
        case shopActionTypes.UPDATE_COLLECTIONS:{
            //alert(shopActionTypes.UPDATE_COLLECTIONS)
            return {
                ...state,
                collections: action.payload
            }
        }
        default:
            return state
    }
}