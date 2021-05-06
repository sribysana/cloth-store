import React from 'react';
import './manu-item.style.scss'

const Menuitem = ({title, subtitle})=>(
    <div className="menu-item">
        <div className="content">
            <div className="title">{title}</div>
            <span className="subtitle">{subtitle}</span>
        </div>
    </div>
)

export default Menuitem;

