import {BsImages} from "react-icons/bs";
import './QueueComponent.css'
function QueueComponent () {
    return(
        <div className = "queue">
            <div className = "left-queue-side">
                <BsImages className = "queue-image"></BsImages>
                <div className = "queue-text-container">
                    <p className = "queue-name">Queue name</p>
                    <span className = "queue-description">Description Bottom</span>
                </div>
            </div>
            <div className = "right-queue-side">
                <div className = "counter">15</div>
            </div>
        </div>
    )
}

export default QueueComponent;
