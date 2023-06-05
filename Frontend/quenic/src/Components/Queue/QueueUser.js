import './QueueUser.css'
import {HiOutlineUserCircle} from "react-icons/hi";

function QueueUser (prop) {
    console.log(prop.email)
    return(
        <div className = {"user-container"}>
            <div className = {"user-position-container"}>
                <div className = {"user-position"}>{prop.position}</div>
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
