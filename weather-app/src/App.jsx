import React from "react"

import Banner from "./components/banner/banner"

function App() {
  // const [weatherData, setWeatherData] = useState({});
  // const [location, setLocation] = useState('');

  return (
    <div className="weather_app">
      <div className="app_wrapper">
        <Banner/>
         
        <div className="query_city_weather_display">
          <div className="city_title">
            <p>Southgate</p>
          </div>
          <div className="city_temp">
            <h1>88</h1>
          </div>
          <div className="summary">
          <p>The high today is 94.</p>
          </div>

        </div>
        <div className="hourly_weather_updates"></div>
        <div className="seven_day_forecast"></div>
      </div>
    </div>
  );
}

export default App;
