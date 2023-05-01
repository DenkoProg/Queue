import './HomeQueues.css'
import QueueComponent from "./QueueComponent";
import {useEffect, useState} from 'react'

function HomeQueues () {
    const [queues, setQueues] = useState([]);
    async function getQueues(){
        try{
            const response = await fetch('https://localhost:8000/queues');
            const data = await response.json();
            setQueues(data);
        }
        catch (error){
            console.error('Denys sucks dick:', error);
        }
    }
    useEffect(() => {
        getQueues();
    }, [])
    return(
        <div className = "queues-wrapper">
            <div className = "queues-title">
                <span className = "title-text">Your Queues</span>
                <button className = "add-title-button">+</button>
            </div>
            <div className = "queues">
                {queues.map((queue) => {
                    <QueueComponent key = {queue.description} name = {queue.name} description = {queue.description} />
                })}
            </div>
        </div>
    );
}

export default HomeQueues
