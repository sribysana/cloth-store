const innitialState={
    section:[
        {
            title:"HATS",
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:1,
            subtitle:'Shop now',
            linkURL:'shop/hats'
        },
        {
            title:"jackets",
            imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
            id:2,
            subtitle:'Shop now',
            linkURL:'shop/jackets'
        },
        {
            title:"Sneakers",
            imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
            id:3,
            subtitle:'Shop now',
            linkURL:'shop/sneakers'
        },
        {
            title:"women",
            imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
            id:4,
            subtitle:'Shop now',
            linkURL:'shop/womens',
            size:'large'
        },
        {
            title:"men",
            imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
            id:5,
            subtitle:'Shop now',
            linkURL:'shop/mens',
            size:'large'
        }

    ]
}


export const directoryReducer=(state=innitialState, action)=>{
    switch(action.type){
        default:
        return state
    }
}

