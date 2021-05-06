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
                    id:1
                },
                {
                    title:"HATS",
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    id:2
                },
                {
                    title:"HATS",
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    id:3
                },
                {
                    title:"HATS",
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    id:4
                },
                {
                    title:"HATS",
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    id:5
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