import React from 'react';
import FormInput from '../form-inpurt/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email:'', password:'' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name] : value })
     }
    render(){ 
        return(
            <div className= 'sign-in'>
                <h2>I already have an account</h2>
                <spand>Sign in with your email and password</spand>

                <form onSubmit = {this.handleSubmit}>

                    <FormInput
                     type= 'email'
                     name= 'email'
                     value= {this.state.email}
                     handleChange= {this.handleChange}
                     label= 'email'
                     required
                    />
                    

                    <FormInput 
                     type= 'password'
                     name= 'password'
                     value= {this.state.password}
                     handleChange= {this.handleChange}
                     label= 'password'
                     required
                    />

                    <CustomButton type= 'submit'>
                        Sign In
                    </CustomButton>
                    <CustomButton onClick = {signInWithGoogle}>
                       {''} Sign In with Google{''}
                    </CustomButton>
                    
                </form>
            </div>
        );
    }
}
export default SignIn;