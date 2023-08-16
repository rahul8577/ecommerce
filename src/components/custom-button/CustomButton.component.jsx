import React from "react";
import './custom-button.style.css'

const CustomButton = ({children, isGoogleButton,inverted, ...otherProps}) => 
     (<button className= {   `${inverted ? 'inverted' : null} ${isGoogleButton ? 'google-sign-in' : null} custom-button `   } {...otherProps}>
        {children}
    </button>)

export default CustomButton;