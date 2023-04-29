import classes from "./JoinQueue.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Add from './images/Add.png'
import Find from './images/Find.png'
import Exit from './images/Exit.png'

function JoinQueue() {
    return (
    <div className={classes.mainContainer}>
        <img src={Exit} className={classes.exitImage} alt={"Exit"}/>
        <div className={classes.textBlock}>
            <div className={classes.header}>Do you want to join an existing queue?</div>
            <div className={classes.paragraph}>Write queue code</div>
            <form>
                    <input type="text" className={classes.input} placeholder="Your code"/>
            </form>
        </div>
        <Button  variant="dark" className={classes.addButton}><img src={Add} className={classes.addImage} alt={"Add"}></img>Create new</Button>
        <Button className={classes.findButton} variant="outline-secondary"><img src={Find} className={classes.findImage} alt={"Find"}></img>Find queue</Button>
    </div>)
}

export default JoinQueue