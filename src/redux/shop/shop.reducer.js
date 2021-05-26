import {SHOP_DATA} from './shop-Data'

const innitialState={
    collections:SHOP_DATA
}

export const shopReducer = (state=innitialState, action)=>{
    switch(action.type){
        default:
            return state
    }
}