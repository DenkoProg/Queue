import './HeaderComponent.css'
import {RxHamburgerMenu} from 'react-icons/rx'
import {FaUser} from 'react-icons/fa'
function HeaderComponent ({ toggleSidePanel }) {
    return(
        <div className = "header">
            <div className = "left-side">
                <button onClick={toggleSidePanel} className="hamburger-menu-button">
                <RxHamburgerMenu  className = "hamburger-menu" />
                </button>
                <a className = "logo">Quenic</a>
            </div>
            <div className= "right-side">
                <FaUser className = "user-icon"/>
            </div>
        </div>
    );
}
export default HeaderComponent;
