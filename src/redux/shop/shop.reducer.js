// import {SHOP_DATA} from './shop-Data';
import {shopActionTypes} from './shop.types';

 

const initialState={
    collections: null
}

export const shopReducer = (state = initialState, action)=>{
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