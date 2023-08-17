import React from "react";
import './cart-item.style.css';

function CartItem({item:{imageurl,name,quantity,price}}) {
    return (
        <div className="cart-item">
            <img src={imageurl} alt="item" />

            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    );
}

export default CartItem;