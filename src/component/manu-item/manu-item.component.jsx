import React from 'react';
import './manu-item.style.scss';

const Menuitem = ({title, subtitle,imageUrl, size })=>(
    <div className={`menu-item ${size}`} >
        <div className="backgroundImage" style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className="content">
            <div className="title">{title}</div>
            <span className="subtitle">{subtitle}</span>
        </div>
    </div>
)

export default Menuitem;

