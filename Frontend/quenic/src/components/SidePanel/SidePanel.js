import classes from './SidePanel.module.css'
import homeIcon from './images/Home.png'
import profileIcon from './images/Profile.png'
import favouriteQueuesIcon from './images/FavouriteQueues.png'
import addQueueIcon from './images/AddQueue.png'
import settingsIcon from './images/Settings.png'
import aboutUsIcon from './images/AboutUs.png'
import logOutIcon from './images/LogOut.png'


function SidePanel() {
    return (<div className={classes.root}>
            <div className={classes.listElementFirst}>
                <img src={homeIcon} className={classes.image} alt="Home Icon"/>
                <div className={classes.home}>Home</div>
            </div>
            <div className={classes.listElement}>
                <img src={profileIcon} className={classes.image} alt="Profile Icon"/>
                <div className={classes.text}>Profile</div>
            </div>
            <div className={classes.listElement}>
                <img src={favouriteQueuesIcon} className={classes.bookmarkImage} alt="Bookmark Icon"/>
                <div className={classes.favoriteQueues}>Favorite Queues</div>
            </div>
            <div className={classes.listElement}>
                <img src={addQueueIcon} className={classes.image} alt="Create Icon"/>
                <div className={classes.text}>Create Queue</div>
            </div>
            <div className={classes.listElement}>
                <img src={settingsIcon} className={classes.settingsImage} alt="Settings Icon"/>
                <div className={classes.text}>Settings</div>
            </div>
            <div className={classes.listElement}>
                <img src={aboutUsIcon} className={classes.infoImage} alt="Info Icon"/>
                <div className={classes.text}>About Us</div>
            </div>
            <div className={classes.listElementLast}>
                {<img src={logOutIcon} className={classes.image} alt="Logout Icon"/>}
                <div className={classes.text}>Log Out</div>
            </div>
        </div>)
}

export default SidePanel