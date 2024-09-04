import { LocationInfo } from "../../Search/types/searchTypes"

export type WeatherForecastContainerProps = {
  selectedLocation: LocationInfo
}

export type detailedLocationWeather = {
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number,
  wx_main: string,
  wx_desc: string,
  precip_prob: number,
  cloud_cover: number,
  wind_speed: number,
  wind_gust: number,
  date_time: string
}

export type metaLocationWeather = {
  name: string,
  country: string,
  min_temp: number,
  max_temp: number,
  sunrise: number,
  sunset: number,
  timezone: number
}