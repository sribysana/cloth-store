import {cardActionTypes} from './cart.Types';
import {addItemToCart} from './cart.util';

const INNITIAL_STATE={
    hidden:true,
    cartItems:[]
}

 export const cartReducer = (state = INNITIAL_STATE, action)=>{

    switch(action.type){
        case cardActionTypes.TOGGLE_CART_HIDDEN:{
            const{hidden}=state;
            return {
                ...state,
                hidden: !hidden
            }
        }
        case cardActionTypes.ADD_ITEM:{
            const {cartItems} = state;
            return {
                ...state,
                cartItems: addItemToCart(cartItems, action.payload)
            }
        }
        default:
            return state;
    }
}

 