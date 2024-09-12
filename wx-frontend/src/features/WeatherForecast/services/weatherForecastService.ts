import { apiData, apiIcon } from "../../../api/clients";

export const fetchForecastByLatLon = async (lat: number, lon: number) => {
  const response = await apiData.get(`/forecast?lat=${lat}&lon=${lon}&APPID=9989d79681452c9ef9f1ae0f3b163e7d&units=metric`);
  return response.data;
};
