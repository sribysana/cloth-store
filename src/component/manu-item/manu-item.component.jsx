import React from 'react';
import {withRouter} from 'react-router-dom'
import './manu-item.style.scss';

const Menuitem = ({title, subtitle,imageUrl, size, linkURL, match, history })=>(
    
    <div className={`menu-item ${size}`}  onClick={()=>{history.push(`${match.url}shop/${linkURL}`)}}>
    {console.log(match)}
        <div className="backgroundImage" style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className="content">
            <div className="title">{title}</div>
            <span className="subtitle">{subtitle}</span>
        </div>
    </div>
)

export default withRouter(Menuitem);

