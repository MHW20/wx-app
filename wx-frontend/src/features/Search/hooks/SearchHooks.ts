import { useMemo } from "react";
import { useQuery, QueryFunction } from "react-query";
import { fetchForecastByLatLon, fetchLocationByName } from "../services/searchService";
import debounce from 'lodash'

export const useLocation = (input: string) => {
  return useQuery({
    queryKey: ["location", input],
    queryFn: () => fetchLocationByName(input),
    enabled: !!input
  });
}

export const useForecast = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ["location", lat, lon],
    enabled: typeof lat === 'number' && typeof lon === 'number',
    queryFn:() => fetchForecastByLatLon(lat, lon)
  })
}