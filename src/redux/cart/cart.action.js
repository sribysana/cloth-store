import {cardActionTypes} from './cart.Types'


export const addItem = newItem =>({
    type:cardActionTypes.ADD_ITEM,
    payload:newItem
})

export const toggleCart = () => ({
    type: cardActionTypes.TOGGLE_CART_HIDDEN,    
})

export const clearItem = id =>({
    type:cardActionTypes.CLEAR_ITEM,
    payload:{id},
})

export const removeItem = id => ({
    type:cardActionTypes.REMOVE_ITEM,
    payload:{id}
})