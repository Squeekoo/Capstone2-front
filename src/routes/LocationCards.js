import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./LocationCards.css";

const LocationCards = ({ id, name }) => {
    console.debug("LocationCards", id, name);
    console.log(name);

    return (
        <>
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="LocationCards col-md-8 offset-md-2 shadow-sm p-3 mb-5 bg-white rounded">
                            <Link
                                className="LocationCards-link card"
                                to={`/location/${id}`}
                                style={{ textDecoration: "none" }}>
                                <div className="card-body">
                                    <h4 className="card-title text-dark">
                                        {name}
                                    </h4>
                                </div>
                            </Link>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default LocationCards;