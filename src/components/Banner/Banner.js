import React from 'react';

import "./banner.scss";

class Banner extends React.Component {
    render() {
        return (
            <section className="banner">
                <div id="div_id"></div>
                <div className="container">
                    <div className="flex-banner-center">
                        <div className="page-banner">
                            <a href="#element-1" className="img-el-1">
                                <div className="img-one">
                                    <div className="img-description">
                                        <h2 className="img-text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
                                            dolore.
                                        </h2>

                                    </div>
                                </div>
                            </a>

                            <a href="#element-1" className="img-el-1">
                                <div className="img-twoA">
                                    <div className="img-description">
                                        <h2 className="img-text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, veritatis.
                                        </h2>
                                    </div>
                                </div>
                                <div className="opacity-over"> </div>
                            </a>

                            <a href="#element-1" className="img-el-1">
                                <div className="img-twoB">
                                    <div className="img-description">
                                        <h2 className="img-title">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis?
                                        </h2>
                                        <div className="benner-overlay"> </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner