import React, { useEffect, useState } from "react";
import { useLocation } from "./hooks/SearchHooks";
import SearchBox from './SearchBox';
import { isArrayEmpty } from "../../utils/utility";
import { LocationInfo } from "./types/searchTypes";
import SearchResultsList from "./SearchResultsList";

const SearchContainer: React.FC = () => {
  const [input, setInput] = useState("");
  const [locations, setLocations] = useState<LocationInfo[]>()

  const { isLoading, isError, data } = useLocation(input);

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  useEffect(() => {
    if (!isArrayEmpty(data)) {
      setLocations(data);
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
    {locations ? (
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
