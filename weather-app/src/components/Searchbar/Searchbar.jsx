import {useState} from 'react';
import './Searchbar.css';


export const Searchbar = ({onQueryChange}) => {
    //useState Hooks
    const [input, setInput] = useState("");
   

    //Destructure the data, loading, and error states from the custom hook
    
    const handleSearch = (event) => {
        event.preventDefault();

        if(!input.trim()) {
            return;
        }
        onQueryChange(input);
        setInput("");

    }
  return (
    <form className="searchbar-container" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Type in a location..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='searchbar-text'
      />
    </form>
  )
}
