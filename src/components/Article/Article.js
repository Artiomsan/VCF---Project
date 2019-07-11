import React from 'react';

import transfer1 from "./../../Images/Tr-J.Rem.jpg";
import transfer2 from "./../../Images/Tr-D.Czer.jpg";
import transfer3 from "./../../Images/Tr-J.Cill.jpg";

import article1 from "./../../Images/artykuł/milik.jpg"
import article2 from "./../../Images/artykuł/art 2.jpg"
import article3 from "./../../Images/artykuł/art 3.jpg"
import article4 from "./../../Images/artykuł/art 4.jpg"

import tableInfo from "./../../Images/Mecze/tabela 2 bis.jpg"

import './article.scss';

import {transferSticky} from "./articleSticky"
import {tableferSticky} from "./articleSticky"

class Article extends React.Component{

    componentDidMount() {
        transferSticky()
        tableferSticky()
    }

    render() {
        return (
            <section className="section__main__news">
                <div className="container flex-row">
                    <div className="page-news flex-col">

                        <article className="article">
                            <a href="Arkadiusz Milik trafi do Mestalla?"><h2>Arkadiusz Milik trafi do Mestalla?</h2></a>
                            <span>Michał Muszyński</span>
                            <img src={article1} className="article-img" alt="Milik w Valencia FC?" />
                            <p>Napoli nie rezygnuje z prób zakontraktowania Rodrigo Moreno. Neapolitańczycy nie są w stanie zaoferować Valencii tyle, ile klub z Estadio Mestalla sobie życzy, stąd wicemistrzowie Włoch chcą obniżyć kwotę transferu oferując w rozliczeniu Arkadiusza Milika...</p>

                        </article>
                        <article className="article">
                            <a href="Koniec sagi. Maxi Gómez w Valencii!"><h2>Koniec sagi. Maxi Gómez w Valencii!</h2></a>
                            <span>Michał Kosim</span>
                            <img src={article2} className="article-img" alt="Koniec Sagi. M.Gomes w Valencji!" />
                            <p>Jedna z największych transferowych oper mydlanych obecnego okienka dobiega końca. Maxi Gómez już wkrótce powinien oficjalnie zostać nowym piłkarzem Valencii. W drugą stronę, do Celty, powędrują Santi Mina oraz Jorge Sáenz. …</p>

                        </article>
                        <article className="article">
                            <a href="Murthy: „Rywalizujemy z bogatymi"><h2>Murthy: „Rywalizujemy z bogatymi</h2></a>
                            <span>Michał Kosim</span>
                            <img src={article3} className="article-img" alt="Rywalizujemy z bogatymi" />
                            <p>Prezydent Valencii, Anil Murthy, wziął udział w oficjalnej prezentacji Jasona jako nowego zawodnika Blanquinegros. Zanim dziennikarze zadali kilka pytań samemu piłkarzowi, Murthy poruszył temat karnetów na sezon 2019/20 i sytuacji na rynku transferowym. …</p>
                        </article>
                        <article className="article">
                            <a href="#zamierzaTuZostać"><h2>Jason: „Zamierzam tu zostać”</h2></a>
                            <span>Michał Kosim</span>
                            <img src={article4} className="article-img" alt="Jason: Zamierza zostać" />
                            <p>Jason Remeseiro został w ten poniedziałek zaprezentowany jako gracz Valencii. Były zawodnik Levante, który dołączył do Los Ches na zasadzie wolnego transferu, zapewnił, że chce walczyć o miejsce w składzie Marcelino i nie planuje odchodzić na wypożyczenie. …</p>
                        </article>


                    </div>
                    <div className="box-transfers flex-col">
                        <p>Trasfery 19/20</p>
                        <div className="transfer">
                            <img src={transfer1} className="transfer-img" alt="Jason Rem." />
                        </div>
                        <div className="transfer">
                            <img src={transfer2} className="transfer-img" alt="Denis Czer." />
                        </div>
                        <div className="transfer">
                            <img src={transfer3} className="transfer-img" alt="Jasper Cill." />
                        </div>
                    </div>
                    <div className="table flex-col">
                        <img src={tableInfo} className="article-img" alt="Jason: Zamierza zostać" />
                    </div>
                </div>
            </section>
        )
    }

}

export default Article