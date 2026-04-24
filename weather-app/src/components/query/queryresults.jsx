import React, { use, useState, useEffect } from "react";

const QueryResults = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  // const [locationQuery, setLocationQuery] = useState("");
  // const [data, setData] = useState(null);

  

  return (
    <div className="searchbar-container">
      <div className="search-icon">
        <i className="bi bi-search"></i>
      </div>
      <div className="input-container">
        <input
          placeholder="Please enter the location to view the weather in that area."
          value={""}
          // onChange={(event) => setLocationQuery(event.target.value)}
          // onKeyDown={queryWeather}
          type="text"
        />
      </div>
    </div>
  );
};

export default QueryResults;
