import React, { useState, useEffect } from "react";
import './Search.css'
import { FaSearch } from "react-icons/fa";
import { useLocation } from "./hooks/SearchHooks";
import debounce from 'lodash'


type SearchProps = {
  placeholder: string
}

const Search: React.FC<SearchProps> = ({
  placeholder
}) => {
  const [input, setInput] = useState("");

  const { isLoading, isError, data } = useLocation(input)

  return (
    <div id='searchBox'>
      <FaSearch id='searchIcon'/>
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