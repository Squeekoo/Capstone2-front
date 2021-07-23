import React from "react";
import { Link } from "react-router-dom";

const LocationCard = ({ id, name }) => {
    console.debug("LocationCard", id, name);

    return (
        <div className="LocationCard col-md-8 offset-md-2">
            <Link className="LocationCard card" to={`/locations/${id}`}>
                <div className="card-body">
                    <h4 className="card-title text-dark">
                        {name}
                    </h4>
                </div>
            </Link>
        </div>
    );
}

export default LocationCard;