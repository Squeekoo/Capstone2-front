import React, { useEffect, useState } from "react";
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

    const [locations, setLocations] = useState(null);

    useEffect(function getLocationsOnMount() {
        console.debug("LocationsList useEffect getLocationsOnMount");
        search();
    }, []);

    /** Triggered by SearchForm submit and reloads locations. */
    async function search(name) {
        let locations = await LocInfoApi.getLocations(name);
        setLocations(locations);
    }

    if (!locations) return (
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

            {locations.length ? (
                <div className="LocationsList-list">
                    {locations.map(l => (
                        <LocationCards
                            key={l.id}
                            id={l.id}
                            name={l.attributes.name} />
                    ))}
                </div>
            ) : (
                <h1>No locations found. Please try a different name.</h1>
            )}
        </div>
    );
}

export default Locations;