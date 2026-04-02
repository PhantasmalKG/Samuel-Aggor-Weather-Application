import React, {useState} from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const QueryResults = ({onQueryChange}) => {

  const [locationQuery, setLocationQuery] = useState(null);
  const weather_API_KEY = import.meta.env.VITE_WEATHER_APP_API_KEY;
  const weatherAPP_URL = import.meta.env.VITE_WEATHER_APP_API_URL;
  

  const handleOnChange = (searchData) => {
    setLocationQuery(searchData);
    onQueryChange(locationQuery);
  };

  const weatherURL = (url, keyword, app_API_KEY) => {
    const newUrl = `${url}?q=${keyword}&appid=${app_API_KEY}`;
    return newUrl;
  };

  const loadOptions = (inputValue) => {
    return fetch(
      weatherURL(weatherAPP_URL, inputValue, weather_API_KEY), options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.log(err));
  };

  return (
    <AsyncPaginate
      placeholder="Please enter the location to view the weather in that area."
      debounceTimeout={400}
      value={locationQuery}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

export default QueryResults