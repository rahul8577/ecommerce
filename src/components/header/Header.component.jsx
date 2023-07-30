import React from 'react'
import { AiOutlineCrown as Logo } from 'react-icons/ai'
import './header.style.css'
import { auth } from '../../firebase/firebase.utils';

import { Link } from 'react-router-dom'; 

export default function Header({currentuser}) {
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
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }
            </div>
        </div>
    )
}
