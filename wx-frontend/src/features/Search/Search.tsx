import React, { useState, useEffect } from "react";
import './Search.css'
import { FaSearch } from "react-icons/fa";
import { fetchLocationbyLatLon } from "./services/searchService";

type SearchProps = {
  placeholder: string
}

const Search: React.FC<SearchProps> = ({
  placeholder
}) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchLocationbyLatLon(51.5085,-0.1257)
  }, [input]);

  return (
    <div id='searchBox'>
      <FaSearch />
      <input 
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        >
      </input>
    </div>
  )
}

export default Search