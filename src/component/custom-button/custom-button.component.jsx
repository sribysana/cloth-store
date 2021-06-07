import React from 'react';

import {CustomButtonContainer} from './custom-button.style';
//import './custom-button.style.scss';


/*const CustomButton=({children, isGoogleSigin, inverted, ...otherprops})=>(
    <button {...otherprops} className= { `${inverted ? 'inverted' : ''} ${isGoogleSigin ? 'googleSigin' : ''}  custom-button`} >
        {children}
    </button>
)*/



const CustomButton=({children,...props})=>(
    <CustomButtonContainer {...props}  >
        {children}
    </CustomButtonContainer>
)

export default CustomButton