export type SearchContainerProps = {
  setToggleSearch: (value: boolean) => void,
  toggleSearch: boolean
}

export type SearchBoxProps = {
  placeholder: string;
  inputValue: string;
  onInputChange: (value: string) => void;
  onClick: () => void
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