import {BsImages} from "react-icons/bs";
import './HomeQueue.css'
import { Link } from 'react-router-dom'
function HomeQueue (props) {
    return(
        <Link to={`/queue/${props.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className = "queue">
            <div className = "left-queue-side">
                <BsImages className = "queue-image"></BsImages>
                <div className = "queue-text-container">
                    <p className = "queue-name">{props.name}</p>
                    <span className = "queue-description">{props.description}</span>
                </div>
            </div>
            <div className = "right-queue-side">
                <div className = "counter">{props.user_count}</div>
            </div>
        </div>
        </Link>
    )
}

export default HomeQueue;
