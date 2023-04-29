import './App.css';

import HeaderComponent from "./Components/HeaderComponent/HeaderComopnent";
import HomeComponent from "./Components/HomeComponents/HomeComponent";
import SidePanel from "./Components/SidePanel/SidePanel";
import Description from "./Components/ModalComponents/DescriptionComponent/Description";
import FooterComponent from "./Components/FooterComponent/FooterComponent";

function App() {
  return (
    <div className="App">
      {/*<SidePanel />*/}
      <HeaderComponent />
        {/*<Description />*/}
        <HomeComponent></HomeComponent>
        <FooterComponent/>
    </div>
  );
}

export default App;
