import {cardActionTypes} from './cart.Types'


export const addToCart = newItem =>({
    type:cardActionTypes.ADD_TO_CART,
    payload:newItem
})

export const toggleCart =  ()=> ({
    type: cardActionTypes.TOGGLE_CART_HIDDEN,    
})