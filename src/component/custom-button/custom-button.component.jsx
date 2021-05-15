import React from 'react';

import './custom-button.style.scss';


const CustomButton=({children,isGoogleSigin, ...otherprops})=>(
    <button {...otherprops} className= { `${isGoogleSigin ? 'googleSigin' : ''}  custom-button`} >
        {children}
    </button>
)

export default CustomButton