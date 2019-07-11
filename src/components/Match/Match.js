import React from 'react';
import nextMatch from "../../Images/Mecze/Next match.jpg";
import prevMatch from "../../Images/Mecze/Prev match.jpg";
import allMatch from "../../Images/Mecze/Kolejne mecz.jpg";
import advert from "../../Images/Mecze/reklama-slajder-310x145.png"

import "./match.scss"

class Match extends React.Component{
    render() {
        return (
            <section className="section__match">
                <div className="container">
                    <div className="all-match">
                        <div className="box-match">
                            <img src={advert} className="match-adver" alt="mijesce na reklamę" />
                        </div>
                        <div className="box-match">
                            <img src={nextMatch} className="match-img" alt="Kolejny mecz" />
                        </div>
                        <div className="box-match">
                            <img src={allMatch} className="match-img" alt="Kolejne mecze" />
                        </div>
                        <div className="box-match">
                            <img src={prevMatch} className="match-img" alt="Poprzedni mecz" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Match