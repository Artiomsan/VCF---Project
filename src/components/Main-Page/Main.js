import React from 'react';
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Match from "../Match/Match";
import Article from "../Article/Article";


class Main extends React.Component{
    render() {
        return (
<>
                <div className="main-conteiner-color">
                <Header/>
                </div>
                <Banner/>
                <div className="main-conteiner-color">
                <Match/>
                <Article/>
                </div>
</>
        )
    }

}

export default Main