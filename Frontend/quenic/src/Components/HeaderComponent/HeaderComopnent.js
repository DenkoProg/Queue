import './HeaderComponent.css'
import {RxHamburgerMenu} from 'react-icons/rx'
import {FaUser} from 'react-icons/fa'
import {isLoggedIn} from "../SignUpComponent/SignIn";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

function HeaderComponent ({ toggleSidePanel, isLoggedIn}) {
    const navigate = useNavigate();
    return(
        <div className = "header">
            <div className = "left-side">
                <button onClick={toggleSidePanel} className="hamburger-menu-button">
                <RxHamburgerMenu  className = "hamburger-menu" />
                </button>
                <a className = "logo" onClick={() => navigate('/')}>Quenic</a>
            </div>
                {isLoggedIn ? (
                    <div className= "right-side">
                    <FaUser className = "user-icon"/>
                    </div>
                ) : (
                    <div className="right-side-bigger">
                        <Button onClick={() => navigate('/signIn')} className="signInButton" variant="btn btn-outline-secondary">Sign In</Button>
                        <Button onClick={() => navigate('/signUp')} className="signUpButton" variant="outline-secondary">Sign Up</Button>
                    </div>
                )}
        </div>
    );
}
export default HeaderComponent;
