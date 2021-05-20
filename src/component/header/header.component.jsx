import React from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {auth} from "../../firebase/firebase.util";
import {selectCurrentuser} from '../../redux/user/user.selecter';
import {selectCartHidden} from '../../redux/cart/cart.selector';

import {ReactComponent as Logo} from '../../assets/images/crown.svg';

import './header.style.scss'

const Header = ({userInfo, hidden})=>{
   
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
                    {userInfo ? (<div onClick={()=>{console.log('>>>>>>>>>'); auth.signOut()}}> Sigout</div>) : (<Link to="/sigin" className="option">
                            Sigin
                        </Link>)
                    }
                    <CartIcon/>
                </div>
              {!hidden && <CartDropdown/>} 
        </div>)
}

//const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => {
const mapStateToProps = createStructuredSelector({      
     userInfo: selectCurrentuser,
     hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header);