import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomBtn from '../custom-btn/custom-btn.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';



class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        }catch(e) {
            console.log(e.message);
        }

    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({[name]: value});
    }
 
    render() { 
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name="email" 
                    type="email" 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label="Email"
                    required
                    />
                    <FormInput  
                    name="password" 
                    type="password" 
                    value={this.state.password}
                    onChange={this.handleChange} 
                    label="Password"
                    required/>
                    <div className='buttons'>
                        <CustomBtn type="submit">
                            Sign In
                        </CustomBtn>
                        <CustomBtn onClick={signInWithGoogle} isGoogleSignIn={true}>
                        Sign in with google
                        </CustomBtn>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SignIn;