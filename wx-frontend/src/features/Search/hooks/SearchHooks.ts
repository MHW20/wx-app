import { useQuery } from "react-query";
import { fetchForecastByLatLon, fetchLocationByName } from "../services/searchService";

export const useLocation = (input: string) => {
  return useQuery({
    queryKey: ["location", input],
    enabled: !!input,
    queryFn: () => fetchLocationByName(input)
  })
}

export const useForecast = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ["location", lat, lon],
    enabled: typeof lat === 'number' && typeof lon === 'number',
    queryFn:() => fetchForecastByLatLon(lat, lon)
  })
}