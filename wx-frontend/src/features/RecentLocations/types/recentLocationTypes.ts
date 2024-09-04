import { LocationInfo } from "../../Search/types/searchTypes"

export type recentLocationsContainerProps = {
  setSelectedLocation: (value: LocationInfo) => void
}

export type simpleLocationWeather = {
  name: string
  country: string
  curr_temp: number
  curr_wx_symbol: string
}