import "./SignUp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            console.error("Passwords do not match");
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:8000/dj-rest-auth/registration/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: formData.username,
                        email: formData.email,
                        password1: formData.password,
                        password2: formData.confirmPassword,
                    }),
                }
            );

            if (response.ok) {
                setRegistrationSuccess(true);
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                console.error("Registration failed");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="main-container-signup">
            <div className="signup-text-content">
                <h4 className="signup-title">Create An Account</h4>
                <span className="signup-text">
          Create an account to enjoy all the services without any ads for free!
        </span>
            </div>
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="signup-inputs">
                    <input
                        name="email"
                        placeholder="Enter your Email address"
                        className="signup-input email"
                        onChange={handleInputChange}
                    />
                    <input
                        name="username"
                        placeholder="Enter your Username"
                        className="signup-input user"
                        onChange={handleInputChange}
                    />
                    <input
                        name="password"
                        placeholder="Enter your Password"
                        className="signup-input password"
                        onChange={handleInputChange}
                    />
                    <input
                        name="confirmPassword"
                        placeholder="Confirm your Password"
                        className="signup-input password"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="signup-create">
                    <button className="signup-button" type="submit">
                        Create Account
                    </button>
                    <a className="login-link" onClick={() => navigate('/signin')}>Already Have An Account? Sign In</a>
                </div>
            </form>
            {registrationSuccess && (
                <div className="success-message">Registration Successful!</div>
            )}
        </div>
    );
}

export default SignUp;
