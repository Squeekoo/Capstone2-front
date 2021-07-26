import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LocInfoApi from "../Api";
import LocationCard from "./LocationCard";

const LocationInfo = () => {
    const { id } = useParams();

    const [location, setLocation] = useState(null);

    useEffect(() => {
        async function fetchLocation() {
            try {
                let response = await LocInfoApi.getLocationById(id);
                console.log(response);
                setLocation(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchLocation();
    }, [id]);

    if (!location) return <h1>Loading...</h1>

    let covidObj = location.attributes.covid;
    let county = Object.keys(covidObj)[0];
    let covid = covidObj[county];

    return (
        <div>
            <LocationCard
                key={id}
                id={id}
                covid={covid.text}
                longName={location.attributes.long_name}
                population={location.attributes.population}

            />
        </div>
    )
}

export default LocationInfo;