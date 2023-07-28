import React from 'react'
import { AiOutlineCrown as Logo } from 'react-icons/ai'
import './header.style.css'

import { Link } from 'react-router-dom'; 

export default function Header() {
    return (
        <div className='header'>
            <Link to="/" className="logo-container">
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/contact" className="option">CONTACT</Link>
            </div>
        </div>
    )
}
