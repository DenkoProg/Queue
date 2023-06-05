import './HomeQueues.css'
import HomeQueue from "./HomeQueue";
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import JoinQueue from "../ModalComponents/JoinQueueComponent/JoinQueue";
import CreateQueue from "../ModalComponents/CreateQueueComponent/CreateQueue";


function HomeQueues() {
    const [queues, setQueues] = useState([]);
    const [showJoinQueue, setShowJoinQueue] = useState(false)
    const [showCreateQueue, setShowCreateQueue] = useState(false)
    const handleAddQueueClick = () => {
        setShowJoinQueue(!showJoinQueue);
    }

    const handleCreateQueueClick = () => {
        setShowCreateQueue(!showCreateQueue);
    }

    async function getQueues() {
        try {
            const response = await fetch('http://127.0.0.1:8000/queues/', {
                    // headers: {
                    //     'Authorization': `Bearer ${token}`,
                    //     'Content-Type': 'application/json'
                    // }
                }
            );
            const data = await response.json();
            setQueues(data);
            console.log(data);
        } catch (error) {
            console.error('Denys sucks dick:', error);
        }
    }

    useEffect(() => {
        getQueues();
    }, [])

    async function deleteQueue(id) {
        try {
            const response = await fetch(`http://127.0.0.1:8000/queues/${id}`, {
                method: 'DELETE',
            })
            if (response.ok) {
                console.log(`Queue ${id} deleted successfully`)
            } else {
                console.error('Error', response.statusText)
            }
        } catch (error) {
            console.error('Error', error)
        }
    }

    return (
        <div className="queues-wrapper">
            <div className="queues-title">
                <div className = {"fix-title"}></div>
                <span className="title-text">Your Queues</span>
                <button className="add-title-button" onClick={handleAddQueueClick}>+</button>
            </div>
            <div className="queues">
                {queues.map((queue) => (
                    <Link to={`/queue/${queue.id}`} key={queue.id}>
                        <HomeQueue
                            key = {queue.id}
                            id = {queue.id}
                            name={queue.name}
                            description={queue.description}
                            user_count={queue.user_count}
                        />
                    </Link>
                ))}
            </div>
            {!showCreateQueue && showJoinQueue && <div className="modal-container"><JoinQueue onExit={handleAddQueueClick} onCreateQueueClick={handleCreateQueueClick} /></div>}
            {showCreateQueue && <div className="modal-container"><CreateQueue onExit={handleCreateQueueClick} /></div>}
        </div>
    );
}

export default HomeQueues
