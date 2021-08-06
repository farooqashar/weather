import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { city_query } from "../graphql/queries.js";

const Home = () => {
  const [city, setCity] = useState("");

  const [getWeatherData, { loading, data, error }] = useLazyQuery(city_query, {
    variables: { name: city },
  });

  return (
    <div>
      <h1>Weather</h1>
      <div className="container">
        <p className="text-info">
          Enter a city to get its current weather information!
        </p>
      </div>
      <br />
      <br />

      <div className="form-group">
        <label htmlFor="city" className="form-label">
          Enter City:
        </label>
        <input
          onChange={(event) => setCity(event.target.value)}
          rows="1"
          cols="47"
          required
          class="form-control"
          id="city"
          type="text"
          placeholder="Enter City Here"
        ></input>
      </div>
      <div className="container">
        <div className="form-group">
          <button className="btn btn-primary" onClick={() => getWeatherData()}>
            Search
          </button>
        </div>
        {loading && <h3 class="text-warning">Loading...</h3>}
        {error && <h3 class="text-danger">Error: {error.message} </h3>}

        {data && (
          <>
            <h1>City Name: {data.getCityByName.name}</h1>
            <h1>
              Temperature: {data.getCityByName.weather.temperature.actual}
            </h1>
            <h1>
              Description: {data.getCityByName.weather.summary.description}
            </h1>
            <h1>Wind Speed: {data.getCityByName.weather.wind.speed}</h1>

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
