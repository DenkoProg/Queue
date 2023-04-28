import classes from './SidePanel.module.css'
import homeIcon from './images/Home.png'
import profileIcon from './images/Profile.png'
import favouriteQueuesIcon from './images/FavouriteQueues.png'
import addQueueIcon from './images/AddQueue.png'
import settingsIcon from './images/Settings.png'
import aboutUsIcon from './images/AboutUs.png'
import logOutIcon from './images/LogOut.png'


function SidePanel() {
    return (
        <div className={classes.root}>
            <div className={classes.listElementFirst}>
                <img src={homeIcon} className={classes.image} alt="Home Icon"/>
                <div className={classes.home}>Home</div>
            </div>
            <div className={classes.listElement}>
                <img src={profileIcon} className={classes.image} alt="Home Icon"/>
                <div className={classes.profile}>Profile</div>
            </div>
            <div className={classes.listElement}>
                <img src={favouriteQueuesIcon} className={classes.bookmarkImage} alt="Home Icon"/>
                <div className={classes.favoriteQueues}>Favorite Queues</div>

            </div>
            <div className={classes.listElement}>
                <img src={addQueueIcon} className={classes.image} alt="Home Icon"/>
                <div className={classes.createQueue}>Create Queue</div>

            </div>
            <div className={classes.listElement}>
                <img src={settingsIcon} className={classes.image} alt="Home Icon"/>
                <div className={classes.settings}>Settings</div>
            </div>
            <div className={classes.listElement}>
                <img src={aboutUsIcon} className={classes.image} alt="Home Icon"/>
                <div className={classes.aboutUs}>About Us</div>
            </div>
            <div className={classes.listElementLast}>
                {<img src={logOutIcon} className={classes.lastImage} alt="Home Icon"/>}
                <div className={classes.logOut}>Log Out</div>
            </div>
        </div>
    )
}

export default SidePanel