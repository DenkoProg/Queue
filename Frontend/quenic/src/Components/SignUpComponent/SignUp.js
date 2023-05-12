import  "./SignUp.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, {useState, useEffect} from 'react';

function SignUp() {
    return(
        <div className = "main-container">
            <div className = "signup-text-content">
                <h4 className = "signup-title">Create An Account</h4>
                <span className= "signup-text">Create an account to enjoy all the services without any ads for free!</span>
            </div>
            <form className = "signup-form">
                <div className = "signup-inputs">
                    <input placeholder = "Enter your Email address" className = "signup-input email"/>
                    <input placeholder = "Enter your Username" className = "signup-input user"/>
                    <input placeholder = "Enter your Password" className = "signup-input password"/>
                    <input placeholder = "Confirm your Password" className = "signup-input password"/>
                </div>
                <div className = "signup-create">
                <button className = "signup-button" type="submit">Create Account</button>
                <a className = "login-link">Already Have An Account? Sign In</a>
                </div>
            </form>
        </div>
    )
}

export default SignUp
