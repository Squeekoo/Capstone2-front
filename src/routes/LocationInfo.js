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
                // console.log(response);
                setLocation(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchLocation();
    }, [id]);

    if (!location) return <h1>Loading...</h1>;

    function findPhoto() {
        let cityPhotoRelationships = location.data.relationships;
        if (!cityPhotoRelationships.photos) {
            let statePhotoId = location.data.relationships.state.data.id;
            let includedStatePhoto = location.included.filter(i => i.id === statePhotoId)[0];
            let incStatePhotoId = includedStatePhoto.relationships.featured_photo.data.id;
            let statePhoto = location.included.filter(i => i.id === incStatePhotoId)[0].attributes.image.full;

            return statePhoto;
        }
        let cityPhotoId = cityPhotoRelationships.photos.data[0].id;
        let cityPhoto = location.included.filter(i => i.id === cityPhotoId)[0].attributes.image.full;

        return cityPhoto;
    }

    let budgetObj = location.data.attributes.budget;
    let cityBudget = Object.keys(budgetObj)[0];
    let budget = budgetObj[cityBudget];

    let covidObj = location.data.attributes.covid;
    let county = Object.keys(covidObj)[0];
    let covid = covidObj[county];

    let safetyObj = location.data.attributes.safety;
    let citySafety = Object.keys(safetyObj)[0];
    let safety = safetyObj[citySafety];

    return (
        <div>
            <LocationCard
                key={id}
                id={id}
                budget={budget.text}
                budgetSubText={budget.subText}
                budgetVal={budget.value}
                covid={covid.text}
                covidVal={covid.value}
                kayakCar={location.data.attributes.kayak_car_rental_url}
                kayakLodging={location.data.attributes.kayak_lodgings_url}
                longName={location.data.attributes.long_name}
                photo={findPhoto()}
                population={location.data.attributes.population}
                safety={safety.text}
                safetySubText={safety.subText}
                safetyVal={safety.value}
            />
        </div>
    )
}

export default LocationInfo;