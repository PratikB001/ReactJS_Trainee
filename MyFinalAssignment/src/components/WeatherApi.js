import React, { useState } from "react";

import axios from "axios";
import ShowTemp from "./ShowTemp";
import Map from "./Map";

const WeatherApi = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    description: "",
    temp: 0,
    humidity: 0,
    lat: 0,
    lon: 0,
  });

  const handleClick = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=940c70484ecf44ca73d1d2d4ec33ddd2&units=metric`
      )
      .then((response) => {
        setData({
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          humidity: response.data.main.humidity,
          lat: response.data.coord.lat,
          lon: response.data.coord.lon,
        });
      });
  };

  return (
    <React.Fragment>
      <div className='location-input'>
        <input
          type='text'
          className='input'
          value={city}
          placeholder='Enter Location'
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button type='submit' onClick={handleClick}>
          Search
        </button>
      </div>
      <ShowTemp text={data}></ShowTemp>
      <Map weather={data} />
    </React.Fragment>
  );
};

export default WeatherApi;
