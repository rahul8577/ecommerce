import React from 'react'
import FormInput from '../form-input/FormInput.component';
import './sign-in.style.css'
import CustomButton from '../custom-button/CustomButton.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
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