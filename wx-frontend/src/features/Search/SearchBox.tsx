import React from "react";
import './SearchBox.css';
import { FaSearch } from "react-icons/fa";
import { SearchBoxProps } from "./types/searchTypes";

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder,
  inputValue,
  onInputChange,
}) => {
  return (
    <div id="search-box">
      <FaSearch id="search-icon" />
      <input
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
