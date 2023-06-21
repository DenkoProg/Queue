import classes from "./JoinQueue.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Add from './images/Add.png'
import Find from './images/Find.png'
import Exit from './images/Exit.png'
import React, {useRef, useState} from "react";
import {getCurrentUser} from "../CreateQueueComponent/CreateQueue";
import {useNavigate} from "react-router-dom";
import { Messages } from 'primereact/messages';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function JoinQueue({onExit, onCreateQueueClick}) {
    const messages = useRef(null);
    const navigate = useNavigate()
    const [queueCode, setQueueCode] = useState('');

    const handleInputChange = (event) => {
        setQueueCode(event.target.value)
    }

    const searchQueue = async () => {
        if(queueCode === ''){
            messages.current.show({severity: 'error', summary: 'You have not provided the code'});
            return;
        }
        try {
            const response = await fetch(`https://api.quenic.space/queues/search/${queueCode}`)
            const queue = await response.json();
            navigate(`/queue/${queue.id}`, { state: { props: queue } });
        } catch(error) {
            messages.current.show({severity: 'error', summary: 'Queue not found'});
            console.error(error);
        }
    }

    return (

        <div className={classes.mainContainer}>
            <img src={Exit} className={classes.exitImage} alt={"Exit"} onClick={onExit}/>
            <div className={classes.textBlock}>
                <div className={classes.header}>Do you want to join an existing queue?</div>
                <div className={classes.paragraph}>Write queue code</div>
                <form>
                    <input value={queueCode} onChange={handleInputChange} type="text" className={classes.input} placeholder="Your code"/>
                </form>
            </div>
            <Button onClick={onCreateQueueClick} variant="dark" className={classes.addButton}>
                <img src={Add} className={classes.addImage} alt={"Add"}></img>
                <span className = {classes.joinButtonText}> Create new</span>
            </Button>
            <Button className={classes.findButton} onClick={searchQueue} variant="outline-secondary">
                <img style = {{
                    marginRight: '10px'
                }} src={Find} className={classes.findImage} alt={"Find"}></img>
                <span style = {{
                    justifyContent: 'flex-start'
                }} className = {classes.joinButtonText}> Find queue</span>
            </Button>
            <Messages ref={messages} className='message-container' style={{right: '-350px', bottom: '-200px'}} />
        </div>)
}

export default JoinQueue
