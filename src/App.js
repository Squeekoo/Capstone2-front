import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import './App.css';

import Home from "./Home";
import Eat from "./Eat";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/eat'>
          <Eat />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
