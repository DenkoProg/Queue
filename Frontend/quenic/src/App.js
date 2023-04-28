import './App.css';

import HeaderComponent from "./Components/HeaderComponent/HeaderComopnent";
import HomeComponent from "./Components/HomeComponents/HomeComponent";
import SidePanel from "./Components/SidePanel/SidePanel";

function App() {
  return (
    <div className="App">
      {/*<SidePanel />*/}
      <HeaderComponent/>
      <HomeComponent/>
    </div>
  );
}

export default App;
