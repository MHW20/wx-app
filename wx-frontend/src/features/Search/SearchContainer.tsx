import React, { useEffect, useState } from "react";
import { useLocation } from "./hooks/SearchHooks";
import SearchBox from './SearchBox';
import { isArrayEmpty } from "../../utils/utility";
import { LocationInfo, SearchContainerProps } from "./types/searchTypes";
import SearchResultsList from "./SearchResultsList";
import { changeCountryCodeToCountry } from "./utils/locationTransformation";

const SearchContainer: React.FC<SearchContainerProps> = ({
  setSelectedLocation
}) => {
  const [input, setInput] = useState("");
  const [locations, setLocations] = useState<LocationInfo[]>()

  const { isLoading, isError, data } = useLocation(input);

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleSelectedLocation = (index: number) => {
    const selectedLocation = locations![index];
    console.log('SEARCH RESULTS LIST SELECTED : ', selectedLocation)
    setSelectedLocation(selectedLocation);
  }

  useEffect(() => {
    if (!isArrayEmpty(data)) {
      const updatedLocations: LocationInfo[] = changeCountryCodeToCountry(data)
      setLocations(updatedLocations);
      console.log("Locations : ", data);
    }
    else setLocations(data)
  }, [data]);

  return (
    <>
      <SearchBox
        placeholder="Enter Location..."
        inputValue={input}
        onInputChange={handleInputChange}
      />
      {(locations) && (
        <SearchResultsList 
          results={locations}
          handleSelectedLocation={handleSelectedLocation}
        />
      )}
    </>
  );
};

export default SearchContainer;
