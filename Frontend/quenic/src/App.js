import './App.css';

import HeaderComponent from "./Components/HeaderComponent/HeaderComopnent";
import HomeComponent from "./Components/HomeComponents/HomeComponent";
import SidePanel from "./Components/SidePanel/SidePanel";
import Description from "./Components/ModalComponents/DescriptionComponent/Description";
import JoinQueue from "./Components/ModalComponents/JoinQueueComponent/JoinQueue";
import FooterComponent from "./Components/FooterComponent/FooterComponent";
import CreateQueue from "./Components/ModalComponents/CreateQueueComponent/CreateQueue";
import SignUp from "./Components/SignUpComponent/SignUp";
import SignIn from "./Components/SignUpComponent/SignIn";
import React, {useRef, useCallback} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeQueue from "./Components/HomeComponents/HomeQueue";
import Queue from "./Components/Queue/Queue";

function App() {

    const sidePanelRef = useRef(null);

    const toggleSidePanel = useCallback(() => {
        console.log('App: called')
        if (sidePanelRef.current) {
            sidePanelRef.current.toggleSidePanel();
        }
    }, []);

    return (
        <Router>
            <SidePanel ref={sidePanelRef}/>
            <div className={`main-container`}>
                <HeaderComponent toggleSidePanel={toggleSidePanel}/>
                <Routes>
                    <Route path="/signup" element={<div className="modal-container"><SignUp/></div>}/>
                    <Route path="/signin" element={<div className="modal-container"><SignIn/></div>}/>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/queue" element={<Queue/>}/>
                </Routes>
                <FooterComponent/>
            </div>
        </Router>
        // <div className="App">
        // <SidePanel ref={sidePanelRef} />
        //     <HeaderComponent toggleSidePanel={toggleSidePanel} />
        //     <FooterComponent />
        //     <div className="modal-container">
        //         {/*<Description />*/}
        //         {/*<HomeComponent />*/}
        //         {/*<JoinQueue />*/}
        //         {/*<CreateQueue />*/}
        //         {/*<SignUp />*/}
        //         <SignIn />
        //     </div>
        // </div>
    );
}

export default App;
