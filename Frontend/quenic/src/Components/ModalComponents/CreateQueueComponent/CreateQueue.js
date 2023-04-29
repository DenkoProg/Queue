import classes from "./CreateQueue.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateQueue() {
    return(
        <div className={classes.mainContainer}>
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