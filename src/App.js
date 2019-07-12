import React from 'react';
import './App.scss';
import video from "./Images/vide min test 2.mp4";
import Main from "./components/Main-Page/Main";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Footer from "./components/Footer/Footer"

function App() {
    return (
        <>
            <div className="main-hero" id="start">
                <div className="main-hero-video">
                    <video src={video} type="video/mp4" width="100%" height="100%" autoPlay loop muted>
                    </video>
                    <div className="video-overlay">
                        <div id="div1">
                            <AnchorLink offset='75' href="#div_id"><span>Poznaj więcej</span></AnchorLink>
                            <div id="line"> </div>
                    </div>
                    </div>
                </div>

            </div>

            <Main/>

            <Footer/>
        </>
    );
}

export default App;
