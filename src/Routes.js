import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./routes/Home";
import Locations from "./routes/Locations";
import LocationInfo from "./routes/LocationInfo";

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/locations">
                    <Locations />
                </Route>
                <Route path="/location/:id">
                    <LocationInfo />
                </Route>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Routes;