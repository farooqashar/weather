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
        {loading && <h3 className="text-warning">Loading...</h3>}
        {error && <h3 className="text-danger">Error: {error.message} </h3>}

        {data && (
          <>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{data.getCityByName.name}</h2>
                <h3>
                  Temperature: {data.getCityByName.weather.temperature.actual}
                </h3>
                <h1>
                  Description: {data.getCityByName.weather.summary.description}
                </h1>
                <h1>Wind Speed: {data.getCityByName.weather.wind.speed}</h1>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
