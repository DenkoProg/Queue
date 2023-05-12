import './App.css';

import HeaderComponent from "./Components/HeaderComponent/HeaderComopnent";
import HomeComponent from "./Components/HomeComponents/HomeComponent";
import SidePanel from "./Components/SidePanel/SidePanel";
import Description from "./Components/ModalComponents/DescriptionComponent/Description";
import JoinQueue from "./Components/ModalComponents/JoinQueueComponent/JoinQueue";
import FooterComponent from "./Components/FooterComponent/FooterComponent";
import CreateQueue from "./Components/ModalComponents/CreateQueueComponent/CreateQueue";
import SignUp from "./Components/SignUpComponent/SignUp";
import React, {useRef, useCallback,useState} from "react";

function App() {

    const sidePanelRef = useRef(null);

    const toggleSidePanel = useCallback(() => {
        console.log('App: called')
        if (sidePanelRef.current) {
            sidePanelRef.current.toggleSidePanel();
        }
    }, []);

  return (
    <div className="App">
    <SidePanel ref={sidePanelRef} />
        <HeaderComponent toggleSidePanel={toggleSidePanel} />
        <FooterComponent />
        <div /*className="modal-container"*/>
            {/*<Description />*/}
            <HomeComponent />
            {/*<JoinQueue />*/}
            {/*<CreateQueue />*/}
            {/*<SignUp />*/}
        </div>
    </div>
  );
}

export default App;
