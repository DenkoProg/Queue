import './HeaderComponent.css'
import {RxHamburgerMenu} from 'react-icons/rx'
import {FaUser} from 'react-icons/fa'
function HeaderComponent () {
    return(
        <div className = "header">
            <div className = "left-side">
                <RxHamburgerMenu className = "hamburger-menu"></RxHamburgerMenu>
                <a className = "logo">Quenic</a>
            </div>
            <div className= "right-side">
                <FaUser className = "user-icon"></FaUser>
            </div>
        </div>
    );
}
export default HeaderComponent;
