import logo from "../../Images/logo 2 retro vlencia.png";
import React from 'react';
import {pageHeader} from "./functionHeader";

import "./header.scss"

class Header extends React.Component {

    componentDidMount() {
        pageHeader();
    }

    render() {
        return (
            <header className="page-header">

                <div className="container">

                    <div className="header-flex">
                        <div className="page-nav-log">
                            <a href="/" className="page-logo">
                                <img src={logo} className="page-logo-img" alt="ValenciaFC"/>
                            </a>
                        </div>
                        <nav className="page-nav">
                            <ul className="page-nav-list">
                                <li><a href="#news">Aktualności</a></li>
                                <li><a href="#abautClub">O klubie</a></li>
                                <li><a href="#media">Media</a></li>
                                <li><a href="#blog">Blog</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>

            </header>
        )
    }
}



export default Header