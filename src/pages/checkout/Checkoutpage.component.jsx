import React from "react";
import './checkout.style.css'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectCartItems } from '../../redux/cart/cart.selector'
import { selectCartTotal } from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";

const CheckoutPage = ({ cartitems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        {cartitems.map((cartitem) => (<CheckoutItem key={cartitem.id} cartitem={cartitem}/>))}

        <div className="total">
            <span>${total}</span>
        </div>
    </div>
)


const mapStateToProps = () => createStructuredSelector({
    cartitems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage)