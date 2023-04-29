import './App.css';

import HeaderComponent from "./Components/HeaderComponent/HeaderComopnent";
import HomeComponent from "./Components/HomeComponents/HomeComponent";
import SidePanel from "./Components/SidePanel/SidePanel";
import Description from "./Components/ModalComponents/DescriptionComponent/Description";
import JoinQueue from "./Components/ModalComponents/JoinQueueComponent/JoinQueue";
import FooterComponent from "./Components/FooterComponent/FooterComponent";

function App() {
  return (
    <div className="App">
      {/*<SidePanel />*/}
      <HeaderComponent />
      <FooterComponent />
        {/*<Description />*/}
        <HomeComponent />
        {/*<JoinQueue />*/}


    </div>
  );
}

export default App;
