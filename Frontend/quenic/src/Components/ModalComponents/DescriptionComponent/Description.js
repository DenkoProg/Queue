import classes from './Description.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Link from './images/Link.png'
import Code from './images/Code.png'
import Exit from './images/Exit.png'

function Description(props, {onExit}) {
    return (
        <div className={classes.mainContainer}>
            <img src={Exit} className={classes.exitImage} alt={"Exit"} onClick={onExit}/>
            <div className={classes.textBlock}>
                <div className={classes.queueDescription}>Queue Description</div>
                <div className={classes.paragraph}>{props.description}</div>
            </div>
            <Button className={classes.codeButton} variant="outline-secondary"><img src={Code} className={classes.codeImage} alt={"Code"}></img>Q763GFY2</Button>
            <Button className={classes.linkButton} variant="dark"><img src={Link} className={classes.linkImage} alt={"Link"}></img>Copy Link</Button>
        </div>
    )
}

export default Description
