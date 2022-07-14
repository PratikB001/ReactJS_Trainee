import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Inputform from "./components/Inputform";
import Weather from "./components/Weather";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Inputform />
      <Weather/>
    </React.Fragment>
  );
}

export default App;
