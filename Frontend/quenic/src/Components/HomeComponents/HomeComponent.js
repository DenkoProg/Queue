import './HomeComponent.css'
import './HomeQueues'
import HomeQueues from "./HomeQueues";
function HomeComponent (){
    return(
        <div className = "home-card">
            <HomeQueues></HomeQueues>
        </div>
    );
}

export default HomeComponent;
