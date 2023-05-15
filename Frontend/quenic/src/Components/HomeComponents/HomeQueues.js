import './HomeQueues.css'
import QueueComponent from "./QueueComponent";
import {useEffect, useState} from 'react'

function HomeQueues() {
    const [queues, setQueues] = useState([]);

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

    return (
        <div className="queues-wrapper">
            <div className="queues-title">
                <span className="title-text">Your Queues</span>
                <button className="add-title-button">+</button>
            </div>
            <div className="queues">
                {queues.map((queue) => (
                    <QueueComponent key={queue.description} name={queue.name} description={queue.description}/>
                ))}
            </div>
        </div>
    );
}

export default HomeQueues
