import React from 'react';
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import { auth, createUserProfile } from '../../firebase/firebase.utils'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './sign-up.style.css'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPasword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPasword } = this.state;

        if (password !== confirmPasword) {
            alert("Password dont match")
            return
        }

        try {
            const { user } = await createUserWithEmailAndPassword(auth,email, password);
            await createUserProfile(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPasword: ''
            })

        } catch (error) {
            console.log(error.message)
        }
    }

    handleChange= (event)=>{
        const {name,value} = event.target;
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className="sig-nup">
                <h2 className="title">I do not have a account</h2>
                <span>sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={this.state.displayName}
                        label="display Name"
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        label="Email"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        label="Password"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPasword"
                        value={this.state.confirmPasword}
                        label="Confirm Password"
                        // onClick={()=>{"fsdkl"}}
                        handleChange={this.handleChange}
                        required
                    />

                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>

            </div>
        );
    }
}


export default SignUp
