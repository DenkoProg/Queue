import './QueueUser.css'
import {HiOutlineUserCircle} from "react-icons/hi";

function QueueUser (prop) {
    return(
        <div className = {"user-container"}>
            <div className = {"user-position-container"}>
                <div className = {"user-position"}>1</div>
            </div>
            <div className = {"user-details"}>
                <HiOutlineUserCircle className = {"user-details-icon"}></HiOutlineUserCircle>
                <span className = {"user-details-email"}>{prop.email}</span>
                <button className = {"swap-button"}></button>
            </div>
        </div>
    );
}

export default QueueUser
