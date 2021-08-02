import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

import Footer from "../Footer";

const Home = () => {
    return (
        <div className="outer-div">
            <div className="jumbotron jumbotron-fluid">
                <div className="jumbo-container">
                    <h1 className="display-1">LocInfo</h1>
                    <p className="lead mt-3">You are now free to move about the country.</p>
                </div>
            </div>
            <Container className="main-container">
                <Row>
                    <Col sm={6}><p className="display-4 mt-4">You search for your location.</p></Col>
                    <Col sm={6}><p className="display-4 mt-4">We provide you with information.</p></Col>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}

export default Home;