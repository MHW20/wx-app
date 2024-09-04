export type SearchContainerProps = {
  setSelectedLocation: (value: LocationInfo) => void
}

export type SearchBoxProps = {
  placeholder: string;
  inputValue: string;
  onInputChange: (value: string) => void;
};

export type SearchResultsListProps = {
  results: LocationInfo[],
  handleSelectedLocation: (index: number) => void
};

export type LocationInfo = {
  country: string,
  lat: number,
  local_names: {[country_code: string]: string},
  lon: number,
  name: string,
  state: string
}