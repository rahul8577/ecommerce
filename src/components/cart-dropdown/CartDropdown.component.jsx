import React from 'react';
import CustomButton from '../custom-button/CustomButton.component';
import './cart-dropdown.style.css';
import { connect } from 'react-redux'
import CartItem from '../cart-item/CartItem.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import toggleCartHidden from '../../redux/cart/cart.action'

function CartDropdown({ cartItems, history, dispatch }) {

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map((cartItem => (<CartItem key={cartItem.id} item={cartItem} />)))
                        :
                        <span className='empty-message'>Your Cart Is Empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('./checkout');
                dispatch(toggleCartHidden())
            }}>Go to Checkout</CustomButton>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems })

export default withRouter(connect(mapStateToProps)(CartDropdown));