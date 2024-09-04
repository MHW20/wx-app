import { apiData } from "../../../api/clients";
import { apiGeo } from "../../../api/clients";

export const fetchForecastByLatLon = async (lat: number, lon: number) => {
  const response = await apiData.get(`/forecast?lat=${lat}&lon=${lon}&APPID=9989d79681452c9ef9f1ae0f3b163e7d`);
  return response.data;
};

export const fetchLocationByName = async (name: string) => {
  const response = await apiGeo.get(`/direct?q=${name}&limit=5&APPID=9989d79681452c9ef9f1ae0f3b163e7d`);
  return response.data;
};
