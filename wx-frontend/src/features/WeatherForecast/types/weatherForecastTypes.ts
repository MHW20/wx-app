import { LocationInfo } from "../../Search/types/searchTypes"

export type WeatherForecastContainerProps = {
  selectedLocation: LocationInfo
}

type Coordinates = {
  lat: number;
  lon: number;
};

type City = {
  coord: Coordinates;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
};

type WeatherDescription = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type MainInfo = {
  temp: number;
  temp_min: number;
  temp_max: number;
  temp_kf: number;
  feels_like: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
};

type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

type Clouds = {
  all: number;
};

type Sys = {
  pod: string;
};

export type WeatherListItem = {
  dt: number;
  dt_txt: string;
  main: MainInfo;
  weather: WeatherDescription[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
};

export type WeatherForecastResponse = {
  city: City,
  cnt: number,
  cod: string,
  list: WeatherListItem[],
  message: number
};

export type WeatherForecastDetailed = {
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number,
  wx_main: string,
  wx_desc: string,
  precip_prob: number,
  cloud_cover: number,
  wind_deg: number
  wind_speed: number,
  wind_gust: number,
  date: string,
  time: string
}

export type WeatherForecastMeta = {
  name: string,
  country: string,
  min_temp: number,
  max_temp: number,
  sunrise: number,
  sunset: number,
  timezone: number
}