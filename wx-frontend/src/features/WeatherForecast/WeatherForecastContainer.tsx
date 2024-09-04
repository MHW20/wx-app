import React, { useEffect, useState } from "react"
import { WeatherForecastContainerProps, WeatherForecastDetailed, WeatherForecastMeta, WeatherForecastResponse, WeatherListItem } from "./types/weatherForecastTypes";
import { useForecast } from "./hooks/weatherForecastHook";
import { metersPerSecondToMilesPerHour } from "./utils/WeatherForecastUtility";

const WeatherForecastContainer: React.FC<WeatherForecastContainerProps> = ({
  selectedLocation
}) => {

  const { isLoading, isError, isSuccess, data: fullWeatherInfo } = useForecast(selectedLocation.lat, selectedLocation.lon)

  console.log('SELECTED LOCATION : ', fullWeatherInfo)
  console.log('FULL RESPONSE : ', fullWeatherInfo)

  const parseAndTransformForecast = (forecast: WeatherForecastResponse): {
    metaForecast: WeatherForecastMeta
    detailedForecast: WeatherForecastDetailed[]
  } => {
    let detailedForecast: WeatherForecastDetailed[] = []
    let tempMax = 0
    let tempMin = 0

    let index = 0
    for (let item of forecast.list) {
      console.log('ITEM : ', item)
      
      let temp = item.main.temp
      tempMax = Math.max(temp, tempMax)
      tempMin = Math.min(temp, tempMin)

      const [date, time] = item.dt_txt.split(' ')

      detailedForecast[index] = {
        temp: temp,
        feels_like: item.main.feels_like,
        pressure: item.main.pressure,
        humidity: item.main.humidity,
        wx_main: item.weather[0].main,
        wx_desc: item.weather[0].description,
        precip_prob: item.pop,
        cloud_cover: item.clouds.all,
        wind_deg: item.wind.deg,
        wind_speed: metersPerSecondToMilesPerHour(item.wind.speed),
        wind_gust: metersPerSecondToMilesPerHour(item.wind.gust),
        date: date,
        time: time
      }
      

      index++
    }

    const metaForecast: WeatherForecastMeta = {
      name: forecast.city.name, 
      country: forecast.city.country, 
      min_temp: tempMin, 
      max_temp: tempMax,
      sunrise: forecast.city.sunrise,
      sunset: forecast.city.sunset,
      timezone: forecast.city.timezone,
    }
    
    return {
      'metaForecast': metaForecast,
      'detailedForecast': detailedForecast,
    }
  }

  if (isSuccess){
    const {metaForecast, detailedForecast} = parseAndTransformForecast(fullWeatherInfo)
  
    console.log('METADATA AFTER TRANSFORMED: ', metaForecast)
    console.log('FORECAST AFTER TRANSFORMED: ', detailedForecast)
  }

  return (
    <div>a</div>
  )
}

export default WeatherForecastContainer;