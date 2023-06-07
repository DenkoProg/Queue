import './Queue.css'
import QueueUser from "./QueueUser";
import {useLocation, useParams} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import Description from "../ModalComponents/DescriptionComponent/Description";
import {getCurrentUser} from "../ModalComponents/CreateQueueComponent/CreateQueue";

function Queue() {
    const {id} = useParams();
    const [queueData, setQueueData] = useState({});
    const [userData, setUserData] = useState([{}]);
    const [showDescription, setShowDescription] = useState(false)
    const [isInQueue, setIsInQueue] = useState(false);
    const location = useLocation();
    const queueDataFromState = location.state?.props;

    const handleDescription = () => {
        setShowDescription(!showDescription);
    }

    const token = localStorage.getItem('token');

    useEffect(() => {
        const checkIfUserIsInQueue = async () => {
            try {
                const user = await getCurrentUser();
                const response = await fetch(`http://127.0.0.1:8000/queues/${id}/members/`);
                const members = await response.json();

                const userIsInQueue = members.some(member => member.user === user.pk);
                setIsInQueue(userIsInQueue);
            } catch (error) {
                console.error(error);
            }
        };

        checkIfUserIsInQueue();
    }, [id]);

    const addUserToQueue = async () => {
        try {
            const user = await getCurrentUser();
            const response = await fetch(`http://127.0.0.1:8000/queues/${id}/members/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
                body: JSON.stringify({
                    user: user.pk,
                    queue: id,
                })
            });
            if (!response.ok) {
                throw new Error('Failed to add user to queue');
            }
            setIsInQueue(true);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    const deleteUserFromQueue = async () => {
        try {
            const user = await getCurrentUser();
            console.log(user)
            const response = await fetch(`http://127.0.0.1:8000/queues/${id}/members/${user.pk}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {
                    id: user.pk,
                    queue_id: id,
                }
            })
            setIsInQueue(false)
            window.location.reload();
        } catch(error) {
            console.error(error)
        }
    }

    useEffect(() => {
        // If there's data passed as state, use it instead of fetching from API
        if (queueDataFromState) {
            setQueueData(queueDataFromState);
        } else {
            // Fetch from API as normal
            fetch(`http://127.0.0.1:8000/queues/${id}`)
                .then(response => response.json())
                .then(data => setQueueData(data))
                .catch(err => console.error(err));
        }
    }, [id, queueDataFromState]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/queues/${id}/members/`)
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(err => console.error(err));
    }, [id]);

    return (
        <div className={`queues-container`}>
            <div className={`queues-info`}>
                <div className={"info-button name"}>
                    <span className={"queue-name-text"}>{queueData.name}</span>
                </div>
                <div className={"info-button count"}>
                    <span className={"queue-name-text"}>People in queue:</span>
                    <div className={"info-counter"}>{queueData.user_count}</div>
                </div>
                <div onClick={handleDescription} className={"info-button description"}>
                    <span className={"queue-name-text"}>Description</span>
                    <svg className={"description-image"}></svg>
                </div>
            </div>
            <div className={"users-container"}>
                {userData.map((user) => {
                    return <QueueUser key={user.email} email={user.username} position={user.position}></QueueUser>
                })}
            </div>
            <div className={"queue-button-container"}>
                {isInQueue ?
                <button className={"leave-queue-button"} onClick={deleteUserFromQueue}>Leave this queue</button>:
                <button className={"queue-button"} onClick={addUserToQueue}>Join this queue</button>
                }
            </div>
            {(showDescription) && <div onClick={handleDescription} className="modal-container"><Description
                description={queueData.description} code={queueData.code} onClick={handleDescription} onExit={handleDescription}/></div>}
        </div>
    );
}

export default Queue;
