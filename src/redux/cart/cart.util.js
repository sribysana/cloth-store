export const addItemToCart = (items, newItem) => {
   const currentItem =  items.find(i=>i.id===newItem.id);
   if(currentItem){
    return items.map(i => (
        i.id == newItem.id ? {...i, quantity: i.quantity+1}: {...i}
    ))
   }
   return [...items, {...newItem, quantity:1}]
}