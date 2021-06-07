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

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './header.style';

//import './header.style.scss'

const Header = ({userInfo, hidden})=>{
   
    return (<HeaderContainer>
                <LogoContainer to="/" >
                    <Logo className="logo"/>
                </LogoContainer>
                <OptionsContainer>
                    <OptionLink to="/shop">
                        Shop
                    </OptionLink>
                    <OptionLink to="/shop">
                        Contact
                    </OptionLink  >
                    {userInfo ? (<OptionDiv onClick={()=>{console.log('>>>>>>>>>'); auth.signOut()}}> Sigout</OptionDiv>) : (<OptionLink to="/sigin">
                            Sigin
                        </OptionLink>)
                    }
                    <CartIcon/>
                </OptionsContainer>
              {!hidden && <CartDropdown/>} 
        </HeaderContainer>)
}

//const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => {
const mapStateToProps = createStructuredSelector({      
     userInfo: selectCurrentuser,
     hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header);