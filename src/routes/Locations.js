import React, { useState } from "react";
import LocInfoApi from "../Api";
import SearchForm from "../forms/SearchForm";
import LocationCard from "./LocationCard";

const Locations = () => {
    console.debug("LocationsList");

    const [locations, setLocations] = useState([]);

    async function search(name) {
        let locations = await LocInfoApi.getLocations(name);
        console.log(locations);
        setLocations(locations);
    }

    if (!locations) return <h1>Loading...</h1>;


    return (
        <div className="LocationsList col-md-8 offset-md-2">
            <h1>Search Locations</h1>
            <SearchForm search={search} />

            {locations.map(l => (
                <LocationCard
                    key={l.id}
                    id={l.id}
                    name={l.attributes.name} />
            ))}
        </div>
    );
}

export default Locations;