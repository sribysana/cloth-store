import {cardActionTypes} from './cart.Types';

const INNITIAL_STATE={
    hidden:true,
}

 export const cartReducer = (state = INNITIAL_STATE, action)=>{

    switch(action.type){
        case cardActionTypes.TOGGLE_CART_HIDDEN:{
            const{hidden}=state
            return {
                ...state,
                hidden: !hidden
            }
        }
        default:
            return state;
    }
}

 