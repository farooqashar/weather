import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import {city_query} from "../graphql/queries.js";

const Home = () => {

    const [city, setCity] = useState("");

    const [getWeatherData, {loading, data, error}] = useLazyQuery(city_query, {
        variables: {name: city}
    });

    return (
        <div className="container">
        <h1>Weather</h1>
        <p className="text-info">Enter a city to get its current weather information!</p>
        <br />
        <br />

        <div className="form-group">
        <input onChange={(event) => setCity(event.target.value)} id="city" type="text" placeholder="Enter City Here"></input>
        </div>

        <div className="form-group">
        <button onClick={() => getWeatherData()}>Search</button>
        </div>
        
        {data && 
        <>
         <h1>City Name: {data.getCityByName.name}</h1>
         <h1>Temperature: {data.getCityByName.weather.temperature.actual}</h1>
         <h1>Description: {data.getCityByName.weather.summary.description}</h1>
         <h1>Wind Speed: {data.getCityByName.weather.wind.speed}</h1></>}

        </div>
    )
};

export default Home;