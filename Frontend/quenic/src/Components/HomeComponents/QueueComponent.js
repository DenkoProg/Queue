import {BsImages} from "react-icons/bs";
import './QueueComponent.css'
function QueueComponent (props) {
    return(
        <div className = "queue">
            <div className = "left-queue-side">
                <BsImages className = "queue-image"></BsImages>
                <div className = "queue-text-container">
                    <p className = "queue-name">{props.name}</p>
                    <span className = "queue-description">{props.description}</span>
                </div>
            </div>
            <div className = "right-queue-side">
                <div className = "counter">15</div>
            </div>
        </div>
    )
}

export default QueueComponent;
