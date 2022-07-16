import React from "react";
import "./css/showTemp.css";

function ShowTemp({ text }) {
  return (
    <React.Fragment>
      <div className='display-wrapper'>
        <div className='temperature'>
          <p>Temperature: {text.temp - 273.15}</p>
        </div>

        <div className='humidity'>
          <p>Humidity: {text.humidity} %</p>
        </div>

        <div className='description'>
          <p>Description: {text.description}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ShowTemp;
