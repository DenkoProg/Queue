import classes from "./CreateQueue.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Exit from "../JoinQueueComponent/images/Exit.png";
import React, {useState, useEffect, useRef} from "react";
import { Messages } from 'primereact/messages';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export async function getCurrentUser() {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch('https://api.quenic.space/dj-rest-auth/user/', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`,
            },
        })

        if (!response.ok){
            throw new Error("Could not fetch user")
        }

        const Userdata = await response.json();
        return Userdata;
    } catch (error) {
        console.error(error);
    }
}


function CreateQueue({onExit}) {
    const messages = useRef(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        try{
            getCurrentUser().then(currentUser => {
                setUser(currentUser)
            });
        } catch {
            getCurrentUser().then(currentUser => {
                setUser(currentUser)
            });
        }

    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(user) {
            const creator = user.pk;
            try {
                const response = await fetch("http://18.185.28.225/queues/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        creator: creator,
                        name: name,
                        description: description,
                        users: [creator],
                    })
                })

                if(!response.ok){
                    messages.current.show({severity: 'error', summary: 'Something went wrong. Try again, please'});
                    throw new Error('Network response was not ok')
                }
                messages.current.show({severity: 'info', summary: 'Queue has been created!'});
                onExit();
                window.location.reload();
            } catch (error) {
                messages.current.show({severity: 'error', summary: 'Something went wrong. Try again, please'});
                console.error('Error', error)
            }
        } else {
            messages.current.show({severity: 'error', summary: 'User not found'});
        }
    }
    return(
        <div className={classes.mainContainer}>
            <img src={Exit} className={classes.exitImage} alt={"Exit"} onClick={onExit}/>
            <div className={classes.content}>
                <div className={classes.header}>Create a new Queue</div>
                <div className={classes.paragraph}>Use Quenic to simplify your routine tasks</div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="QueueName" autoComplete="off" className={classes.queueName} placeholder={"Queue Name"} onChange={e => setName(e.target.value)}/>
                    <textarea name="Description"  autoComplete="off" className={classes.description} placeholder={"Description"} onChange={e => setDescription(e.target.value)}/>
                    <input type="submit" value="Submit" className={classes.submit} />
                </form>
                <Messages ref={messages} className='message-container' style={{right: '-450px', bottom: '-150px'}} />
            </div>
        </div>
    )
}

export default CreateQueue