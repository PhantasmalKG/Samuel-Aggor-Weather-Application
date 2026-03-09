// import React, {useState} from "react"
// import axios from "axios"


function App() {

  // const [weatherData, setWeatherData] = useState({});
  // const [location, setLocation] = useState('');
  
  return (
    <div className="weather_app">
      <div className="banner_wrapper">
        <div className="logo"></div>
        <div className="input_container"><input></input></div>
        <div className="light_dark_mode_button"></div>
      </div>
      <div className="query_city_weather_display"></div>
      <div className="hourly_weather_updates"></div>
      <div className="seven_day_forcast"></div>
    </div>
  )
}

export default App
