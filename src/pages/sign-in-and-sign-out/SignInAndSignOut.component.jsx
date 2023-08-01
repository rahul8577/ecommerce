import React from "react";
import './sign-in-and-sign-out.style.css'
import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from '../../components/sign-up/SignUp.component';

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
            <div className="sign-in-sign-up">
                <SignIn/>
                <SignUp/>
            </div>
        );
    }
}

export default SignInAndSignOut