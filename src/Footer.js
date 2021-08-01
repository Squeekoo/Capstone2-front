import React from "react";
import RoadGoatImg from "./static/images/powered-by-roadgoat-black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const FooterBar = () => {
    return (
        <>
            <div className="Footer bg-light">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 mt-4">
                            <h4>LocInfo</h4>
                            <p>LocInfo uses the RoadGoat Cities API to provide you with accurate information on over 4.3 million destinations.</p>
                        </div>

                        <div className="col-md-6 col-sm-6 mt-4">
                            <h4>Links</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://github.com/Squeekoo/Capstone2-front">
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            className="Footer-link"
                                            size="lg"
                                            fixedWidth
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="Footer-bot col-md-12 rounded">
                        <a href="https://www.roadgoat.com/">
                            <img src={RoadGoatImg} className="Footer-img" />
                        </a>
                    </div>
                </div>
            </div>
        </>

    );
}

export default FooterBar;