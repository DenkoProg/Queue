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
            <div className={classes.queueDescription}>Do you want to join an existing queue</div>
            <div className={classes.paragraph}>
            </div>
        </div>
        <Button className={classes.addButton} variant="outline-secondary"><img src={Add} className={classes.addImage} alt={"Add"}></img>Create new</Button>
        <Button className={classes.findButton} variant="dark"><img src={Find} className={classes.findImage} alt={"Find"}></img>Find queue</Button>
    </div>)
}

export default JoinQueue