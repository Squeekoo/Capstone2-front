import React from "react";

const LocationCard = ({ id, budget, budgetSubText, budgetVal, covid, covidVal, kayakCar, kayakLodging, longName, photo, population, safety, safetySubText, safetyVal }) => {
    console.debug("LocationCard");

    return (
        <div id={id} className="LocationCard card" >

            <div className="card-header">
                <b>{longName}</b>
            </div>

            {/* <img className="card-img-top" src={photo} alt="Location" /> */}

            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <b>Population:</b> {population}
                </li>
                <li className="list-group-item">
                    <b>Covid Level:</b> {covidVal} (<i className="text-muted">{covid}</i>)
                </li>
                <li className="list-group-item">
                    <b>Safety Level:</b> {safetyVal} (<i className="text-muted">{safety} - {safetySubText}</i>)
                </li>
                <li className="list-group-item">
                    <b>Budget:</b> {budgetVal} (<i className="text-muted">{budget} - {budgetSubText}</i>)
                </li>
            </ul>
            <div className="card-body">
                <a href={kayakCar} className="card-link">Car Rental (Kayak)</a>
                <a href={kayakLodging} className="card-link">Hotels (Kayak)</a>
            </div>
        </div>
    );
}

export default LocationCard;