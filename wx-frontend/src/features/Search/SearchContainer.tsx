import React, { useEffect, useState } from "react";
import { useLocation } from "./hooks/SearchHooks";
import SearchBox from './SearchBox';
import { isArrayEmpty } from "../../utils/utility";
import { LocationInfo } from "./types/searchTypes";
import SearchResultsList from "./SearchResultsList";
import { changeCountryCodeToCountry } from "./utils/locationTransformation";

const SearchContainer: React.FC = () => {
  const [input, setInput] = useState("");
  const [locations, setLocations] = useState<LocationInfo[]>()

  const { isLoading, isError, data } = useLocation(input);

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  useEffect(() => {
    if (!isArrayEmpty(data)) {
      const updatedLocations: LocationInfo[] = changeCountryCodeToCountry(data)
      setLocations(updatedLocations);
      console.log("Locations : ", data);
    }
  }, [data]);

  return (
    <>
      <SearchBox
        placeholder="Enter Location..."
        inputValue={input}
        onInputChange={handleInputChange}
      />
      {(locations && input.length !== 0) ? (
        <SearchResultsList 
          results={locations}
        />
      ) : (
        <>
        </>
    )}
    </>
  );
};

export default SearchContainer;
