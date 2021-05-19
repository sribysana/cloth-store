import {cardActionTypes} from './cart.Types'


export const addItem = newItem =>({
    type:cardActionTypes.ADD_ITEM,
    payload:newItem
})

export const toggleCart =  ()=> ({
    type: cardActionTypes.TOGGLE_CART_HIDDEN,    
})