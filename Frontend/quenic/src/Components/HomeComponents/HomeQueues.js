import './HomeQueues.css'
import HomeQueue from "./HomeQueue";
import React, {useEffect, useState, useRef} from 'react'
import JoinQueue from "../ModalComponents/JoinQueueComponent/JoinQueue";
import SignUp from "../SignUpComponent/SignUp";
import CreateQueue from "../ModalComponents/CreateQueueComponent/CreateQueue";


function HomeQueues() {
    // const test = [{name: 'aasda', description: 'asdasdasd'}]
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
            // const token = '2880c8980ae5d149d202c76b8ed76b17799c9aae';
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
                <span className="title-text">Your Queues</span>
                <button className="add-title-button" onClick={handleAddQueueClick}>+</button>
            </div>
            <div className="queues">
                {queues.map((queue) => (
                    <HomeQueue key={queue.description} name={queue.name} description={queue.description} user_count={queue.user_count}/>
                ))}
            </div>
            {!showCreateQueue && showJoinQueue && <div ref={modalRef} className="modal-container"><JoinQueue onExit={handleAddQueueClick} onCreateQueueClick={handleCreateQueueClick} /></div>}
            {showCreateQueue && <div ref={modalRef} className="modal-container"><CreateQueue onExit={handleCreateQueueClick} /></div>}
        </div>
    );
}

export default HomeQueues
