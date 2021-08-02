import React, { useState } from "react";
import LocInfoApi from "../Api";
import SearchForm from "../forms/SearchForm";
import LocationCards from "./LocationCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";

/** Search bar 
 * 
 * Lists all locations depending on the search query
*/

const Locations = () => {
    console.debug("LocationsList");

    const [initialState, setInitialState] = useState(true);
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(false);

    /** Triggered by SearchForm submit and reloads locations. */
    async function search(name) {
        setLoading(true);

        let locations = await LocInfoApi.getLocations(name);
        setLocations(locations);
        setInitialState(false);
        setLoading(false);
    }

    if (loading) return (
        <h1>
            <FontAwesomeIcon
                icon={faCompass}
                spin
                size="6x"
                className="LoadingIcon"
            />
        </h1>
    );

    return (
        <div className="LocationsList col-md-8 offset-md-2">
            <h1 className="mt-4">Search Locations</h1>
            <SearchForm search={search} />

            {(!initialState && !locations.length) && (
                <h1>No locations found. Please try a different name.</h1>
            )}

            {locations.length > 0 && (
                <div className="LocationsList-list">
                    {locations.map(l => (
                        <LocationCards
                            key={l.id}
                            id={l.id}
                            name={l.attributes.name} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Locations;