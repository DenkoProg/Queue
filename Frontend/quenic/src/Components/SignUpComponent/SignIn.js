import "./SignIn.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

export function isLoggenIn() {
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
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await login(formData.username, formData.password);
        setTimeout(() => {
            navigate("/");
        }, 20);
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
                           onChange={handleInputChange}/>
                    <input name="password" placeholder="Enter your Password" className="signin-input password"
                           onChange={handleInputChange}/>
                </div>
                <div className="signin-create">
                    <button className="signin-button" type="submit" >Sign In</button>
                    <a className="login-link" onClick={() => navigate('/signup')}>Don't Have An Account? Sign Up</a>
                </div>
            </form>
        </div>
    )
}

export default SignIn
