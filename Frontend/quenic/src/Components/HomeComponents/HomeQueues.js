import './HomeQueues.css'
function HomeQueues () {
    return(
        <div className = "queues-wrapper">
            <div className = "queues-title">
                <span className = "title-text">Your Queues</span>
                <button className = "add-title-button">+</button>
            </div>
            <div className = "queues">
                <div className = "queue">

                </div>
                <div className = "queue"></div>
                <div className = "queue"></div>
                <div className = "queue"></div>
            </div>
        </div>
    );
}

export default HomeQueues
