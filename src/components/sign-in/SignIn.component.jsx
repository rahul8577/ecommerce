import React from 'react'
import FormInput from '../form-input/FormInput.component';
import './sign-in.style.css'
import CustomButton from '../custom-button/CustomButton.component';
import { signInWithGoogle , auth } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email,password}=this.state

        try{
            await signInWithEmailAndPassword(auth, email,password);
            this.setState({ email: '', password: '' })
        }catch(error){
            console.log(error)
        }

    }

    handleChange = event =>{
        const {name , value }=event.target;
        this.setState({[name]:value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already Have a account</h2>
                <span>Sign In with Your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        value={this.state.email}
                        name='email'
                        handleChange={this.handleChange}
                        required
                        label="email"
                    />

                    <FormInput
                        type="password"
                        value={this.state.password}
                        name='password'
                        required
                        handleChange={this.handleChange}
                        label="password"
                    />
                    <div className="buttons">

                    <CustomButton type="submit">
                        Sign in
                    </CustomButton>

                    <CustomButton isGoogleButton onClick={signInWithGoogle}>
                        Signin With Google
                    </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;