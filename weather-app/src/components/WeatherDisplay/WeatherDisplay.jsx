import React from 'react'

export const WeatherDisplay = ({ city, data, loading, error }) => {

  const weatherData = data?.data?.values;


  return (
    <div className="borders app_wrapper">
        <p>Current forecast in: </p>
        <div className="borders query_city_weather_display">
          <div className="left">
            <div className="city_title">
              <h1>{city ? city : "Please enter a city."}</h1>
            </div>
            <div className="city_temp">
              <h1>{Math.round(weatherData?.temperature)}°</h1>
            </div>
          </div>
          <div className="middle">


            <div className="summary">
            <p>High: N/A</p>
            <p>Low: N/A</p>
          </div>

          </div>
          <div className="right">
            <div className="actual_temp">
               <p>Actual Temp: {Math.round(weatherData?.temperatureApparent)}°</p> 
            </div>
            <div className="humidity">
              <p>Humidity: {Math.round(weatherData?.humidity)}%</p>
            </div>
            <div className="wind_speed">
              <p>Wind speed: {Math.round(weatherData?.windSpeed)} mph</p>
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
  )
}
