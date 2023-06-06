import './HomeQueues.css'
import HomeQueue from "./HomeQueue";
import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom';
import JoinQueue from "../ModalComponents/JoinQueueComponent/JoinQueue";
import CreateQueue, {getCurrentUser} from "../ModalComponents/CreateQueueComponent/CreateQueue";


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
        const user = await getCurrentUser()
        console.log(user)
        try {
            const response = await fetch(`http://127.0.0.1:8000/users/${user.pk}/queues`);
            const data = await response.json();
            setQueues(data);
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

    const modalRef = useRef(); // Create a reference to modal.

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click was outside the modal.
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowJoinQueue(false);
                setShowCreateQueue(false);
            }
        };

        // Add the listener when component mounts.
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the listener when component unmounts.
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []); // Empty dependencies array means this effect runs once on mount and cleanup on unmount.

    useEffect(() => {
        if (showJoinQueue || showCreateQueue) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to reset the style when the component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [showJoinQueue, showCreateQueue]);

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
            {!showCreateQueue && showJoinQueue && <div ref={modalRef} className="modal-container"><JoinQueue onExit={handleAddQueueClick} onCreateQueueClick={handleCreateQueueClick} /></div>}
            {showCreateQueue && <div ref={modalRef} className="modal-container"><CreateQueue onExit={handleCreateQueueClick} /></div>}
        </div>
    );
}

export default HomeQueues
