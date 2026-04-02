import React from "react";

import Banner from "./components/banner/banner";

function App() {
  // const [weatherData, setWeatherData] = useState({});
  

  return (
    <div className="weather_app">
      <Banner />
      <div className="borders app_wrapper">
        <p>Current forecast in: </p>
        <div className="borders query_city_weather_display">
          <div className="left">
            <div className="city_title">
              <h1>Southgate</h1>
            </div>
            <div className="city_temp">
              <h1>88 deg</h1>
            </div>
          </div>
          <div className="middle">
            
            
            <div className="summary">
            <p>High: 94 deg</p>
            <p>Low: 78 deg</p>
          </div>
         
          </div>
          <div className="right">
            <div className="actual_temp">
              <p>Actual Temp: 55</p>
            </div>
            <div className="humidity">
              <p>Humidity: 20%</p>
            </div>
            <div className="wind_speed">
              <p>The wind speed is: 12MPH</p>
            </div>
          </div>
        </div>
        <div className="borders hourly_weather_updates">
          <p>Hourly Forecast: </p>
        </div>
        <div className="borders seven_day_forecast">
          <p>Seven day Forecast: </p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
