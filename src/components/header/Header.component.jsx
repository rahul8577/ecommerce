import React from 'react'
import { AiOutlineCrown as Logo } from 'react-icons/ai'
import './header.style.css'
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon.component';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartDropdown from '../cart-dropdown/CartDropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

function Header({ currentuser, hidden }) {
    return (
        <div className='header'>
            <Link to="/" className="logo-container">
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/contact" className="option">CONTACT</Link>
                {
                    currentuser ?
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentuser: selectCurrentUser, 
    hidden: selectCartHidden
} )

export default connect(mapStateToProps)(Header);
