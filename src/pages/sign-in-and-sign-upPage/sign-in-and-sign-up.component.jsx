import React from 'react';
import Sigin from "../../component/sign-in/sign-in.component"
import SignUp from '../../component/sign-up/sign-up.component'

import './sign-in-and-sign-up.style.scss';

const SigninAndSignup = ()=>{
    return(
        <div className="sig-in-and-sig-up">
        <Sigin/>
        <SignUp/>
        </div>
    )
}

export default SigninAndSignup;