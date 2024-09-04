import React from "react";
import { SearchResultsListProps } from "./types/searchTypes";
import { IoLocationOutline } from "react-icons/io5";
import './SearchResultsList.css'
import { isUndefinedOrEmpty } from "../../utils/utility";

const SearchResultsList: React.FC<SearchResultsListProps> = ({
  results,
  handleSelectedLocation
}) => {

  return (
    <div id='results-list'>
      {results.map((result, index) => {
        return (
          <div 
            className="result-option-box" 
            key={index}
            onClick={() => handleSelectedLocation(index)}
          >
            <IoLocationOutline />
            <span className='result-option'>
              <span style={{ fontWeight: '700'}}>{result.name} {' '}</span>
              <span style={{ fontWeight:  '400', fontStyle: 'italic'}}>
                {!isUndefinedOrEmpty(result.state) ? '(' + result.state + ') ' : ''}
              </span>
              <span style={{ fontWeight:  '500'}}>{' '} ({result.country})</span>
            </span>
          </div>
        )
      })}
    </div>
  );
};

export default SearchResultsList;