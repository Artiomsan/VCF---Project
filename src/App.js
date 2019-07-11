import React from 'react';
import './App.scss';
import video from "./Images/Video 1 Trim-test max 1.m4v";
import Main from "./components/Main-Page/Main";

import Footer from "./components/Footer/Footer"

function App() {
    return (
        <>
            <div className="main-hero" id="start">
                <div className="main-hero-video">
                    <video src={video} type="video/mp4" width="100%" height="100%" autoPlay loop muted>
                    </video>
                    <div className="video-overlay"> </div>
                </div>
            </div>

            <Main/>

            <Footer/>
        </>
    );
}

export default App;
