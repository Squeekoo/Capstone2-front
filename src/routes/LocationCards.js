import React from "react";
import { Link } from "react-router-dom";

const LocationCards = ({ id, name }) => {
    console.debug("LocationCards", id, name);

    return (
        <div className="LocationCards col-md-8 offset-md-2">
            <Link className="LocationCards card" to={`/location/${id}`}>
                <div className="card-body">
                    <h4 className="card-title text-dark">
                        {name}
                    </h4>
                </div>
            </Link>
        </div>
    );
}

export default LocationCards;