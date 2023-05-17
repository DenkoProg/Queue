import classes from "./CreateQueue.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Exit from "../JoinQueueComponent/images/Exit.png";
import React from "react";

function CreateQueue({onExit}) {
    return(
        <div className={classes.mainContainer}>
            <img src={Exit} className={classes.exitImage} alt={"Exit"} onClick={onExit}/>
            <div className={classes.content}>
                <div className={classes.header}>Create a new Queue</div>
                <div className={classes.paragraph}>Use Quenic to simplify your routine tasks</div>
                <form>
                        <input type="text" name="QueueName" className={classes.queueName} placeholder={"Queue Name"}/>
                        <textarea name="Description" className={classes.description} placeholder={"Description"}/>
                    <input type="submit" value="Submit" className={classes.submit} />
                </form>
            </div>
        </div>
    )
}

export default CreateQueue