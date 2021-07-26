import React from "react";

const LocationCard = ({ id, covid, longName, population }) => {
    console.debug("LocationCard",);

    return (
        <div id={id} className="LocationCard card">

            <div className="card-header">
                <b>{longName}</b>
            </div>
            <div className="card-body">
                <h6 className="card-subtitle">
                    <b><i>Population:</i></b> <i>{population}</i>
                </h6>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b><i>Covid Level:</i></b> <i>{covid}</i></li>
                </ul>
            </div>
        </div>
    );
}

export default LocationCard;