import React, {useState} from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const QueryResults = ({onQueryChange}) => {

  const [query, setQuery] = useState(null);

  const handleOnChange = (searchData) => {
    setQuery(searchData);
    onQueryChange(query);
  }

  return (
    <AsyncPaginate
    placeholder="Please enter the location to view the weather in that area."
    debounceTimeout={400}
    value={query}
    onChange={handleOnChange} />
  )
}

export default QueryResults