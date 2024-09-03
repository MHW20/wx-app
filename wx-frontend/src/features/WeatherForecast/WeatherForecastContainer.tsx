import React, { useState } from "react"
import { WeatherForecastContainerProps, detailedLocationWeather, metaLocationWeather } from "./types/weatherForecastTypes";

const WeatherForecastContainer: React.FC<WeatherForecastContainerProps> = ({

}) => {

  const [metaWeather, setMetaWeather] = useState<metaLocationWeather>(
    {
      name: 'Springfield',
      country: 'United States',
      min_temp: 24,
      max_temp: 13,
      sunrise: 1661834187,
      sunset: 1661882248,
      timezone: 7200
    }
  )

  const [locationsWeather, setLocationsWeather] = useState<detailedLocationWeather[]>(
    [{
      temp: 23,
      feels_like: 21,
      pressure: 1012,
      humidity: 69,
      wx_main: 'Rain',
      wx_desc: 'light rain',
      precip_prob: 0.32,
      cloud_cover: 72,
      wind_speed: 0.62,
      wind_gust: 1.04,
      date_time: '2024-09-03 15:00:00'
    },
    {
      temp: 22,
      feels_like: 21,
      pressure: 1012,
      humidity: 68,
      wx_main: 'Rain',
      wx_desc: 'light rain',
      precip_prob: 0.31,
      cloud_cover: 70,
      wind_speed: 0.61,
      wind_gust: 1.01,
      date_time: '2024-09-03 18:00:00'
    },
    {
      temp: 21,
      feels_like: 19,
      pressure: 1012,
      humidity: 67,
      wx_main: 'Rain',
      wx_desc: 'light rain',
      precip_prob: 0.34,
      cloud_cover: 68,
      wind_speed: 0.63,
      wind_gust: 0.99,
      date_time: '2024-09-03 21:00:00'
    }]
  )
  return (
    <div>a</div>
  )
}

export default WeatherForecastContainer;