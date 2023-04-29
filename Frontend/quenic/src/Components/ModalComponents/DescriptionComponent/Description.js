import classes from './Description.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Link from './images/Link.png'
import Code from './images/Code.png'
import Exit from './images/Exit.png'

function Description() {
    return (
        <div className={classes.mainContainer}>
            <img src={Exit} className={classes.exitImage} alt={"Exit"}/>
            <div className={classes.textBlock}>
                <div className={classes.queueDescription}>Queue Description</div>
                <div className={classes.paragraph}>Commodo eget a et dignissim dignissim morbi vitae, mi. Mi aliquam sit
                    ultrices enim cursus. Leo sapien, pretium duis est eu volutpat interdum eu non. Odio eget nullam
                    elit laoreet. Libero at felis nam at orci venenatis rutrum nunc. Etiam mattis ornare pellentesque
                    iaculis enim.
                </div>
            </div>
            <Button className={classes.codeButton} variant="outline-secondary"><img src={Code} className={classes.codeImage} alt={"Code"}></img>Q763GFY2</Button>
            <Button className={classes.linkButton} variant="dark"><img src={Link} className={classes.linkImage} alt={"Link"}></img>Copy Link</Button>
        </div>
    )
}

export default Description