import React, { useEffect, useState } from "react";
import { useLocation } from "./hooks/SearchHooks";
import SearchBox from './SearchBox';
import { isArrayEmpty } from "../../utils/utility";
import { LocationInfo, SearchContainerProps } from "./types/searchTypes";
import SearchResultsList from "./SearchResultsList";
import { changeCountryCodeToCountry } from "./utils/locationTransformation";
import { useDispatch } from "react-redux";
import { updateSelectedLocation, updateToggleRecentLocations } from "../../state/location/locationSlice";

const SearchContainer: React.FC<SearchContainerProps> = ({
  setToggleSearch,
  toggleSearch
}) => {
  const [input, setInput] = useState("");
  const [locations, setLocations] = useState<LocationInfo[]>()

  const dispatch = useDispatch()

  const { isLoading, isError, data: locationData } = useLocation(input);

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleSelectedLocation = (index: number) => {
    const selectedLocation = locations![index];
    dispatch(updateSelectedLocation(selectedLocation));
  }

  const handleOnClick = () => {
    if (!toggleSearch) setToggleSearch(!toggleSearch)
  }

  useEffect(() => {
    if (!isArrayEmpty(locationData)) {
      const updatedLocations: LocationInfo[] = changeCountryCodeToCountry(locationData)
      setLocations(updatedLocations);
      console.log("Locations : ", locationData);
      dispatch(updateToggleRecentLocations(false))
    }
    else {
      setLocations(locationData)
      dispatch(updateToggleRecentLocations(true))
    }
  }, [locationData]);

  return (
    <>
      <SearchBox
        placeholder="Enter Location..."
        inputValue={input}
        onInputChange={handleInputChange}
        onClick={handleOnClick}
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
