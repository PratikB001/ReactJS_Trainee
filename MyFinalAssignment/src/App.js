import React, { useState } from "react";

import Navbar from "./components/Navbar";
import WeatherApi from "./components/WeatherApi";
import "./app.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <WeatherApi />
    </React.Fragment>
  );
}

export default App;
