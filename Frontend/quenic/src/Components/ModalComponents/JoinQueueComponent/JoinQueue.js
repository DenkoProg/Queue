import classes from "./JoinQueue.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Add from './images/Add.png'
import Find from './images/Find.png'
import Exit from './images/Exit.png'

function JoinQueue({onExit, onCreateQueueClick}) {
    return (

        <div className={classes.mainContainer}>
            <img src={Exit} className={classes.exitImage} alt={"Exit"} onClick={onExit}/>
            <div className={classes.textBlock}>
                <div className={classes.header}>Do you want to join an existing queue?</div>
                <div className={classes.paragraph}>Write queue code</div>
                <form>
                    <input type="text" className={classes.input} placeholder="Your code"/>
                </form>
            </div>
            <Button onClick={onCreateQueueClick} variant="dark" className={classes.addButton}>
                <img src={Add} className={classes.addImage} alt={"Add"}></img>
                <span className = {classes.joinButtonText}> Create new</span>
            </Button>
            <Button className={classes.findButton} variant="outline-secondary">
                <img style = {{
                    marginRight: '10px'
                }} src={Find} className={classes.findImage} alt={"Find"}></img>
                <span style = {{
                    justifyContent: 'flex-start'
                }} className = {classes.joinButtonText}> Find queue</span>
            </Button>
        </div>)
}

export default JoinQueue
