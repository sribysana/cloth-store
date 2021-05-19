import React from 'react';

import './custom-button.style.scss';


const CustomButton=({children, isGoogleSigin, inverted, ...otherprops})=>(
    <button {...otherprops} className= { `${inverted ? 'inverted' : ''} ${isGoogleSigin ? 'googleSigin' : ''}  custom-button`} >
        {children}
    </button>
)

export default CustomButton