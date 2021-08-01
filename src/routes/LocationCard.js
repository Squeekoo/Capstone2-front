import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./LocationCard.css";

const LocationCard = ({
    id,
    airBnb,
    budget,
    budgetSubText,
    budgetVal,
    covid,
    covidVal,
    kayakCar,
    kayakLodging,
    longName,
    name,
    photo,
    population,
    safety,
    safetySubText,
    safetyVal
}) => {
    console.debug("LocationCard");

    return (
        <>
            <div className="jumbotron jumbotron-fluid mt-5">
                <div className="container">
                    <h1 className="display-1">{longName}</h1>
                </div>
            </div>
            <Container>
                <Row>
                    <Col sm={8}>
                        <div id={id} className="LocationCard-img card mt-5 shadow-sm p-3 mb-5 bg-white rounded" >

                            <img className="card-img-top img-thumbnail img-fluid" src={photo} alt="Location" />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div id={id} className="LocationCard-info card mt-5 shadow-sm p-3 mb-5 bg-white rounded" >

                            <div className="card-header">
                                <b>{name}</b>
                            </div>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Population:</b> {population}
                                </li>
                                <li className="list-group-item">
                                    <b>Covid Level:</b> {covidVal} ({covid})
                                </li>
                                <li className="list-group-item">
                                    <b>Safety Level:</b> {safetyVal} ({safety} - <i className="text-muted">{safetySubText}</i>)
                                </li>
                                <li className="list-group-item">
                                    <b>Budget:</b> {budgetVal} ({budget} - <i className="text-muted">{budgetSubText}</i>)
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <div id={id} className="LocationCard-extras card mt-3 shadow-sm p-3 mb-5 bg-white rounded" >

                            <div className="card-header">
                                <b>Extras</b>
                            </div>

                            <div className="card-body">
                                <a
                                    href={airBnb}
                                    className="card-link text-dark"
                                    style={{ textDecoration: "none" }}>
                                    Lodging (Airbnb)
                                </a>
                            </div>
                            <div className="card-body">
                                <a
                                    href={kayakCar}
                                    className="card-link text-dark"
                                    style={{ textDecoration: "none" }}>
                                    Car Rental (Kayak)
                                </a>
                            </div>
                            <div className="card-body">
                                <a
                                    href={kayakLodging}
                                    className="card-link text-dark"
                                    style={{ textDecoration: "none" }}>
                                    Hotels (Kayak)
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LocationCard;