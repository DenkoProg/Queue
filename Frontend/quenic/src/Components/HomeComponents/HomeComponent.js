import './HomeComponent.css'
import './HomeQueues'
import HomeQueues from "./HomeQueues";
import AboutComponent from "./AboutComponent";
function HomeComponent (){
    return(
        <div className = "home-card">
            <HomeQueues></HomeQueues>
            <AboutComponent/>
        </div>
    );
}

export default HomeComponent;
