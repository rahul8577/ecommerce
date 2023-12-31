import React from "react";
import './checkout-item.style.css';

const CheckoutItem = ({cartitem:{name,imageurl,price,quantity}}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageurl}  alt="item" />
        </div>

        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button">
            &#10005;
        </div>
    </div>
)

export default CheckoutItem;