export const addItemToCart = (items, newItem) => {
   const currentItem =  items.find(i=>i.id===newItem.id);
   if(currentItem){
    return items.map(i => (
        i.id == newItem.id ? {...i, quantity: i.quantity+1}: {...i}
    ))
   }
   return [...items, {...newItem, quantity:1}]
}

export const removeItemFromFilter =(items, id)=>{
    const existingCartItem =  items.find(i=>i.id===id);
    if(existingCartItem.quantity===1){
        return items.filter((i)=>i.id!==id)
    }
    
    return  items.map( i =>(
        (i.id===id) ? {...i, quantity:i.quantity-1} : i     
    ))
}