import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import {city_query} from "../graphql/queries.js";

const Home = () => {

    const [city, setCity] = useState("");

    const [getWeatherData, {loading, data, error}] = useLazyQuery(city_query, {
        variables: {name: city}
    });

    return (
        <div>
        {console.log(data)}
        <h1>Find Weather By City</h1>
        <input onChange={(event) => setCity(event.target.value)} id="city" type="text" placeholder="Enter City Here"></input>
        <button onClick={() => getWeatherData()}>Search</button>
        </div>
    )
};

export default Home;