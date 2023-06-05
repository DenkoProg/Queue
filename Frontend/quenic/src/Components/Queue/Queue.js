import './Queue.css'
import QueueUser from "./QueueUser";
import { useParams } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import Description from "../ModalComponents/DescriptionComponent/Description";
function Queue (){
        const { id } = useParams();
        const [queueData, setQueueData] = useState({});
        const [userData, setUserData] = useState([{}]);
        const [showDescription, setShowDescription] = useState(false)

        const handleDescription = () => {
        setShowDescription(!showDescription);
        }

        useEffect(() => {
            fetch(`http://127.0.0.1:8000/queues/${id}`)
                .then(response => response.json())
                .then(data => setQueueData(data))
                .catch(err => console.error(err));
        }, [id]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/queues/${id}/members/`)
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(err => console.error(err));
    }, [id]);

    return(
        <div className = {`queues-container`}>
            <div className = {`queues-info`}>
                <div className = {"info-button name"}>
                    <span className = {"queue-name-text"}>{queueData.name}</span>
                </div>
                <div className = {"info-button count"}>
                    <span className = {"queue-name-text"}>People in queue:</span>
                    <div className = {"info-counter"}>{queueData.user_count}</div>
                </div>
                <div onClick = {handleDescription} className = {"info-button description"}>
                    <span className = {"queue-name-text"}>Description</span>
                    <svg className = {"description-image"}></svg>
                </div>
            </div>
            <div className = {"users-container"}>
                {userData.map((user) => {
                    return <QueueUser key = {user.email} email = {user.username} position = {user.position}></QueueUser>
                })}
            </div>
            <div className = {"queue-button-container"}>
            <button className = {"queue-button"}>Join this queue !</button>
            </div>
            {(showDescription) && <div onClick={handleDescription} className="modal-container"><Description description = {queueData.description} onClick = {handleDescription} onExit = {handleDescription}/></div>}
        </div>
    );
}

export default Queue;
