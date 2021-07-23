import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';

import Navbar from "./Navbar";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
