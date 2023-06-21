import './Queue.css'
import QueueUser from "./QueueUser";
import {useLocation, useParams} from 'react-router-dom';
import React, {useEffect, useRef, useState} from "react";
import Description from "../ModalComponents/DescriptionComponent/Description";
import {getCurrentUser} from "../ModalComponents/CreateQueueComponent/CreateQueue";
import { Messages } from 'primereact/messages';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function Queue() {
    const messages = useRef(null);
    const {id} = useParams();
    const [queueData, setQueueData] = useState({});
    const [userData, setUserData] = useState([]);
    const [showDescription, setShowDescription] = useState(false)
    const [isInQueue, setIsInQueue] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
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
                const response = await fetch(`https://api.quenic.space/queues/${id}/members/`);
                const members = await response.json();

                const userIsInQueue = members.some(member => member.user === user.pk);
                setIsInQueue(userIsInQueue);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        checkIfUserIsInQueue();
    }, [id]);

    const addUserToQueue = async () => {
        try {
            const user = await getCurrentUser();
            const response = await fetch(`https://api.quenic.space/queues/${id}/members/`, {
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
                messages.current.show({severity: 'error', summary: 'Login or create account, please'});
                throw new Error('Failed to add user to queue');
            }
            window.location.reload();
            setTimeout(() => {
                setIsInQueue(true);
                queueData.user_count++;
            }, 400);

        } catch (error) {
            messages.current.show({severity: 'error', summary: 'Login or create account, please'});
            console.error(error);
        }
    }

    const deleteUserFromQueue = async () => {
        try {
            const user = await getCurrentUser();
            console.log(user)
            const response = await fetch(`https://api.quenic.space/queues/${id}/members/${user.pk}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {
                    id: user.pk,
                    queue_id: id,
                }
            })
            window.location.reload();
            setTimeout(() => {
                setIsInQueue(false);
                queueData.user_count--;
            }, 400);
        } catch(error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (queueDataFromState) {
            setQueueData(queueDataFromState);
        } else {
            // Fetch from API as normal
            fetch(`https://api.quenic.space/queues/${id}`)
                .then(response => response.json())
                .then(data => setQueueData(data))
                .catch(err => console.error(err));
        }
    }, [id, queueDataFromState]);
    useEffect(() => {
        fetch(`https://api.quenic.space/queues/${id}/members/`)
            .then(response => response.json())
            .then(data => {
                const sortedData = data.sort((a, b) => a.position - b.position);
                setUserData(sortedData)
            })
            .catch(err => console.error(err));
    }, [id]);

    return (
        <div className={`queues-container`}>
            <div className={`queues-info`}>
                <div className={"info-button name"}>
                    <span className={"queue-name-text"}>{queueData.name}</span>
                </div>
                <div className={"info-button count"}>
                    <span className={"queue-name-text t-counter"}>People in queue:</span>
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
                <Messages ref={messages} className='message-container' style={{right: '50px', bottom: '80px'}} />

                {isLoading ?
                <div className="button-skeleton"></div> :
                    (isInQueue ?
                <button className={"leave-queue-button"} onClick={deleteUserFromQueue}>Leave this queue</button>:
                <button className={"queue-button"} onClick={addUserToQueue}>Join this queue</button>
                    )
                }

            </div>
            {(showDescription) && <div onClick={handleDescription} className="modal-container"><Description
                description={queueData.description} code={queueData.code} onClick={handleDescription} onExit={handleDescription}/></div>}
        </div>
    );
}

export default Queue;
