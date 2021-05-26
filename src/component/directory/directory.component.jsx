import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import MenuItem from '../manu-item/manu-item.component'
import {selectDirectorySection} from '../../redux/directory/directory.selector'

import './directory.style.scss';


class Directory extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        const {section} = this.props;
        return(
            <div className="directory-menu">
                {section.map((i)=><MenuItem {...i}/>)}
            </div>
        )
    }
}

// const mapStateToProps=state=>({
//     section:selectDirectorySection(state)
// })


const mapStateToProps=createStructuredSelector({
    section:selectDirectorySection
})

export default connect(mapStateToProps)(Directory);