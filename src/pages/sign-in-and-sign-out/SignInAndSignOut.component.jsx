import React from "react";
import './sign-in-and-sign-out.style.css'
import SignIn from "../../components/sign-in/SignIn.component";

class SignInAndSignOut extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            passwrod:''
        }
    }

    render(){
        return(
            <div className="signin">
                <SignIn/>
            </div>
        );
    }
}

export default SignInAndSignOut