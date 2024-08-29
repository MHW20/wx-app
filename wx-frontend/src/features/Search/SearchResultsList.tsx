import React from "react";
import { SearchResultsListProps } from "./types/searchTypes";
import './SearchResultsList.css'

const SearchResultsList: React.FC<SearchResultsListProps> = ({
  results
}) => {
  return (
    <div id='results-list'>
      {results.map((result, id) => {
        return <div key={id}>{result.name}</div>
      })}
    </div>
  );
};

export default SearchResultsList;