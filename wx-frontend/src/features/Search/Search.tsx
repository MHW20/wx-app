import React from "react";
import './Search.css'
import { FaSearch } from "react-icons/fa";

type SearchProps = {
  input: string
}

const Search: React.FC<SearchProps> = ({
  input
}) => {
  return (
    <div id='searchBox'>
      <FaSearch />
      <input 
        placeholder="Enter Location..."
        value={input}></input>
    </div>
  )
}

export default Search