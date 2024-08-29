import { useQuery } from "react-query";
import { fetchForecastByLatLon, fetchLocationByName } from "../services/searchService";

export const useLocation = (input: string) => {
  return useQuery(["location", input], () => { fetchLocationByName(input)})
}

export const useForecast = (lat: number, lon: number) => {
  return useQuery(["forecast", lat, lon], () => { fetchForecastByLatLon(lat, lon)})
}