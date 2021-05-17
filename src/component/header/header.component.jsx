import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {auth} from "../../firebase/firebase.util"
import {ReactComponent as Logo} from '../../assets/images/crown.svg'

import './header.style.scss'

const Header = (props)=>{
    console.log('Header component >>>>>>>>>>>', props)
    const{userInfo, abc}=props;
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
                {userInfo ? (<div onClick={()=>{console.log('>>>>>>>>>'); auth.signOut()}}> SigOUt:- {userInfo.email} </div>) : (<Link to="/sigin" className="option">
                Sigin
            </Link>)

                }
                
                
            </div>
        </div>)
}

const mapStateToProps = state => ({
    userInfo:state.user.currentUser,    
})

export default connect(mapStateToProps)(Header);