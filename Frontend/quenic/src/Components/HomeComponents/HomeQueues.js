import './HomeQueues.css'
import QueueComponent from "./QueueComponent";
function HomeQueues () {
    return(
        <div className = "queues-wrapper">
            <div className = "queues-title">
                <span className = "title-text">Your Queues</span>
                <button className = "add-title-button">+</button>
            </div>
            <div className = "queues">
                <QueueComponent/>
                <QueueComponent/>
                <QueueComponent/>
                <QueueComponent/>
            </div>
        </div>
    );
}

export default HomeQueues
