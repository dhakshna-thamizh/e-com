import React from 'react';


class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit =(event) => {
        event.preventDefault();
        this.setState({ email:'', password:'' })
    }

    handleChange = () => {
        const{ value, name } = event.target;
        this.setState({ [name] : value })
     }
    render(){ 
        return(
            <div className= 'sign-in'>
                <h2>I already have an account</h2>
                <spand>Sign in with your email and password</spand>

                <form onSubmit = {this.handleSubmit}>
                    <label>Email</label>

                    <input
                     type= 'email'
                     name= 'email'
                     value= {this.state.email}
                     onChange= {this.handleChange}
                     required
                    />
                    <label>Password</label>

                    <input 
                     type= 'password'
                     name= 'password'
                     value= {this.state.password}
                     onChange= {this.handleChange}
                     required
                    />

                    <input type= 'submit' value= 'Submit Form' />
                </form>
            </div>
        );
    }
}
export default SignIn;