import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from "../../firebase/firebase.util"
import {ReactComponent as Logo} from '../../assets/images/crown.svg'

import './header.style.scss'

const Header = ({userInfo})=>{
    return (<div className="header">
    
            <Link to="/" className="logo-container" >
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    Shop
                </Link>
                <Link to="/shop" className="option">
                    Contact
                </Link>
                {userInfo ? (<div onClick={()=>{console.log('>>>>>>>>>'); auth.signOut()}}> SigOUt {userInfo.email} </div>) : (<Link to="/sigin" className="option">
                Sigin
            </Link>)

                }
                
                
            </div>
        </div>)
}

export default Header;