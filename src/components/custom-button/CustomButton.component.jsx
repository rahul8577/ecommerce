import React from "react";
import './custom-button.style.css'

const CustomButton = ({children, isGoogleButton, ...otherProps}) => 
     (<button className= { `${isGoogleButton ? 'google-sign-in' : null} custom-button `   } {...otherProps}>
        {children}
    </button>)

export default CustomButton;