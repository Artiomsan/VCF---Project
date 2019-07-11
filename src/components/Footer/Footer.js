import React from "react";

import "./footer.scss"

class Footer extends React.Component {
    render() {
        return (

<footer className="page-footer-list">
    <div className="container">
        <div className="footer-flex">
            <div className="contactUs footer-el-list">
                <p><a href="#contact">Kontakt</a></p>
                <p><a href="#forum">Forum</a></p>
            </div>
            <div className="aboutUs footer-el-list">
                <p><a href="#joinUs">Dołącz do redakcji</a></p>
                <p><a href="#partners">Partnerzy</a></p>
            </div>
            <div className="socialMedia footer-el-list">
                <p><a href="#twitter">Twitter</a></p>
                <div className="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline"
                     data-width="100px" data-height="100px" data-small-header="false" data-adapt-container-width="true"
                     data-hide-cover="false" data-show-facepile="true">
                    <blockquote cite="https://www.facebook.com/facebook" className="fb-xfbml-parse-ignore"><a
                        href="https://www.facebook.com/facebook">Facebook</a></blockquote>
                </div>
            </div>

        </div>
    </div>
</footer>
        );
    }
}

export default Footer;