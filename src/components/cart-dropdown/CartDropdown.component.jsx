import React from 'react';
import CustomButton from '../custom-button/CustomButton.component';
import './cart-dropdown.style.css';

export default function CartDropdown(){
    return(
        <div className="cart-dropdown">
            <div className="cart-items">

            </div>
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    );
}