import React from "react"

import Banner from "./components/banner/banner"

function App() {
  // const [weatherData, setWeatherData] = useState({});
  // const [location, setLocation] = useState('');

  return (
    <div className="weather_app">
      <div className="app_wrapper">
        <Banner/>
         
        <div className="query_city_weather_display"></div>
        <div className="hourly_weather_updates"></div>
        <div className="seven_day_forecast"></div>
      </div>
    </div>
  );
}

export default App;
