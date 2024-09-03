import { useQuery } from "react-query"
import { fetchForecastByLatLon } from "../services/weatherForecastService"

export const useForecast = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ["location", lat, lon],
    enabled: typeof lat === 'number' && typeof lon === 'number',
    queryFn:() => fetchForecastByLatLon(lat, lon)
  })
}