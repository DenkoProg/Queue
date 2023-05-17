import './Queue.css'
import QueueUser from "./QueueUser";
function Queue (){
    const test = [{email: "asdasdasdasdasdasdasd"}, {email: "asdasdasdasdasdasdasd"}, {email: "asdasdasdasdasdasdasd"}, {email: "asdasdasdasdasdasdasd"},{email: "asdasdasdasdasdasdasd"},]
    return(
        <div className = {`queues-container`}>
            <div className = {`queues-info`}>
                <div className = {"info-button name"}>
                    <span className = {"queue-name-text"}>Queue name</span>
                </div>
                <div className = {"info-button count"}>
                    <span className = {"queue-name-text"}>People in queue:</span>
                    <div className = {"info-counter"}>15</div>
                </div>
                <div className = {"info-button description"}>
                    <span className = {"queue-name-text"}>Description</span>
                    <svg className = {"description-image"}></svg>
                </div>
            </div>
            <div className = {"users-container"}>
                {test.map((user) => {
                    return <QueueUser key = {user.email} email = {user.email}></QueueUser>
                })}
            </div>
            <div className = {"queue-button-container"}>
            <button className = {"queue-button"}>Join this queue !</button>
            </div>
        </div>
    );
}

export default Queue;
