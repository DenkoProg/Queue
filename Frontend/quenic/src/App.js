import './App.css';

import HeaderComponent from "./Components/HeaderComponent/HeaderComopnent";
import HomeComponent from "./Components/HomeComponents/HomeComponent";
import SidePanel from "./Components/SidePanel/SidePanel";
import Description from "./Components/ModalComponents/DescriptionComponent/Description";
import JoinQueue from "./Components/ModalComponents/JoinQueueComponent/JoinQueue";
import FooterComponent from "./Components/FooterComponent/FooterComponent";
import CreateQueue from "./Components/ModalComponents/CreateQueueComponent/CreateQueue";
import SignUp from "./Components/SignUpComponent/SignUp";
import SignIn, {isLoggedIn} from "./Components/SignUpComponent/SignIn";
import React, {useRef, useCallback, useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import HomeQueue from "./Components/HomeComponents/HomeQueue";
import Queue from "./Components/Queue/Queue";
import {ToastContainer} from "react-toastify";

function App() {


    const sidePanelRef = useRef(null);

    const toggleSidePanel = useCallback(() => {
        console.log('App: called')
        if (sidePanelRef.current) {
            sidePanelRef.current.toggleSidePanel();
        }
    }, []);

    const [loggedIn, setLoggedIn] = useState(isLoggedIn());

    useEffect(() => {
        setLoggedIn(isLoggedIn());
    }, [])

    return (
        <Router>
            <SidePanel ref={sidePanelRef}/>
            <div className={`main-container main-container-full-height`}>
                <HeaderComponent isLoggedIn={loggedIn} toggleSidePanel={toggleSidePanel}/>
                <Routes>
                    <Route path="/signup" element={<div className="not-dark-modal-container"><SignUp/></div>}/>
                    <Route path="/signin" element={<div className="not-dark-modal-container"><SignIn/></div>}/>
                    <Route path="/" exact element={<HomeComponent/>}/>
                    <Route path="/queue/:id" element={<Queue/>}/>
                </Routes>
                <FooterComponent/>
            </div>
        </Router>
    );
}

export default App;
