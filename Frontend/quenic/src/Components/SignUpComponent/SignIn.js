import "./SignIn.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import { Messages } from 'primereact/messages';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';





export function isLoggedIn() {
    return !!localStorage.getItem('token')
}

export async function login(username, password) {
    try {
        const response = await fetch('http://localhost:8000/dj-rest-auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password}),
        })

        if (!response.ok) {
            throw new Error('Login failed: ' + response.statusText);
        }

        const data = await response.json();
        const token = data.key;

        // Save the token in localStorage
        localStorage.setItem('token', token);


        return true;
    } catch (error) {
        console.error(error)


        return false;
    }
}

function SignIn() {
    const messages = useRef(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await login(formData.username, formData.password);
        if (result) {
            messages.current.show({severity: 'success', summary: 'Logged in successfully!'});
            setTimeout(() => {
                navigate("/");
                window.location.reload();
            }, 800);
        } else {
            messages.current.show({severity: 'error', summary: 'Login failed: Check your credentials'});
        }
    }


    return (
        <div className="main-container-signin">

            <div className="signin-text-content">
                <h4 className="signin-title">Sign In</h4>
                <span
                    className="signin-text">Sign in to enjoy all the services without any ads for free!</span>
            </div>
            <form className="signin-form" onSubmit={handleSubmit}>
                <div className="signin-inputs">
                    <input name="username" placeholder="Enter your Username" className="signin-input user"
                           onChange={handleInputChange} autoComplete="off"/>
                    <input name="password" placeholder="Enter your Password" className="signin-input password"
                           onChange={handleInputChange} autoComplete="off"/>
                </div>

                <div className="signin-create">
                    <button className="signin-button" type="submit" >Sign In</button>
                    <a className="login-link" onClick={() => navigate('/signup')}>Don't Have An Account? Sign Up</a>
                </div>
            </form>
            <Messages ref={messages} className='message-container' />
        </div>
    )
}

export default SignIn
