import React, { useEffect, useState } from "react"
import { WeatherForecastContainerProps, WeatherForecastDetailed, WeatherForecastMeta, WeatherForecastResponse, WeatherListItem } from "./types/weatherForecastTypes";
import { useForecast } from "./hooks/weatherForecastHook";
import { getDayOfWeekString, metersPerSecondToMilesPerHour } from "./utils/WeatherForecastUtility";

const WeatherForecastContainer: React.FC<WeatherForecastContainerProps> = ({
  selectedLocation
}) => {

  console.log('SELECTED LOCATION : ', selectedLocation)

  const { isLoading, isError, isSuccess, data: fullWeatherInfo } = useForecast(selectedLocation.lat, selectedLocation.lon)

  console.log('FULL RESPONSE : ', fullWeatherInfo)

  const parseAndTransformForecast = (forecast: WeatherForecastResponse): {
    metaForecast: WeatherForecastMeta
    detailedForecast: WeatherForecastDetailed[]
  } => {
    let detailedForecast: WeatherForecastDetailed[] = []
    let tempMax = new Array(5).fill(Number.MIN_SAFE_INTEGER)
    let tempMin = new Array(5).fill(Number.MAX_SAFE_INTEGER)

    const timezoneSecondsFromUTC = forecast.city.timezone

    let detailedForecastIndex = 0
    let dayIndex = 0
    let previousDate: Date | null = null

    for (let item of forecast.list) {
      const localTime: number = (item.dt + timezoneSecondsFromUTC) * 1000 // Converted to milliseconds
      const localDate = new Date(localTime)
      const isNextDay = previousDate && localDate.getDate() !== previousDate.getDate()

      let temp = item.main.temp
      
      tempMax[dayIndex] = Math.max(temp, tempMax[dayIndex])
      tempMin[dayIndex] = Math.min(temp, tempMin[dayIndex])

      if (isNextDay) dayIndex++
      if (dayIndex === 5) break

      previousDate = localDate

      detailedForecast[detailedForecastIndex] = {
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
        date: `${getDayOfWeekString(localDate)} ${localDate.getDate()}`,
        time: localDate.toTimeString().slice(0, 8)
      }
      detailedForecastIndex++
    }

    const metaForecast: WeatherForecastMeta = {
      name: forecast.city.name, 
      country: forecast.city.country, 
      min_temp: tempMin, 
      max_temp: tempMax,
      sunrise: forecast.city.sunrise,
      sunset: forecast.city.sunset,
      timezone: timezoneSecondsFromUTC,
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