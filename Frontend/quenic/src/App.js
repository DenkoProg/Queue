import './App.css';

import HeaderComponent from "./Components/HeaderComponent/HeaderComopnent";
import HomeComponent from "./Components/HomeComponents/HomeComponent";
import SidePanel from "./Components/SidePanel/SidePanel";
import Description from "./Components/ModalComponents/DescriptionComponent/Description";

function App() {
  return (
    <div className="App">
      <SidePanel />
      <HeaderComponent />
        <Description />
    </div>
  );
}

export default App;
