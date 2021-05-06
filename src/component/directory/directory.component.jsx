import React, {Component} from 'react';
import MenuItem from '../manu-item/manu-item.component'
import './directory.style.scss';


class Directory extends Component{
    constructor(props){
        super(props)
        this.state={
            section:[
                {
                    title:"HATS",
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    id:1,
                    subtitle:'Shop now'
                },
                {
                    title:"jackets",
                    imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                    id:2,
                    subtitle:'Shop now'
                },
                {
                    title:"Sneakers",
                    imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id:3,
                    subtitle:'Shop now'
                },
                {
                    title:"women",
                    imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
                    id:4,
                    subtitle:'Shop now',
                    size:'large'
                },
                {
                    title:"men",
                    imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
                    id:5,
                    subtitle:'Shop now',
                    size:'large'
                }

            ]
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {this.state.section.map((i)=><MenuItem {...i}/>)}
            </div>
        )
    }
}

export default Directory;