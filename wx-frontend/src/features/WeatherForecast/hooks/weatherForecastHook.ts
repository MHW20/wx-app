import { useQuery } from "react-query"
import { fetchForecastByLatLon } from "../services/weatherForecastService"
import { useState } from "react"
import { WeatherForecastDetailed, WeatherForecastMeta, WeatherForecastResponse } from "../types/weatherForecastTypes"
import { getDayOfWeekString, metersPerSecondToMilesPerHour } from "../utils/WeatherForecastUtility"

export const useFetchForecast = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ["forecast", lat, lon],
    enabled: typeof lat === 'number' && typeof lon === 'number',
    queryFn:() => fetchForecastByLatLon(lat, lon)
  })
}

export const useForecast = () => {
  const [metaForecast, setMetaForecast] = useState<WeatherForecastMeta>()
  const [detailedForecast, setDetailedForecast] = useState<WeatherForecastDetailed[][]>([[]])

  const parseAndTransformForecast = (forecast: WeatherForecastResponse) => {
    let detailedForecast: WeatherForecastDetailed[][] = [[]]
    let tempMax = new Array(5).fill(Number.MIN_SAFE_INTEGER)
    let tempMin = new Array(5).fill(Number.MAX_SAFE_INTEGER)

    const timezoneSecondsFromUTC = forecast.city.timezone

    let dayIndex = 0
    let previousDate: Date | null = null

    for (let item of forecast.list) {
      const localTime: number = (item.dt + timezoneSecondsFromUTC) * 1000 // Converted to milliseconds
      const localDate = new Date(localTime)
      const isNextDay = previousDate && localDate.getDate() !== previousDate.getDate()

      let temp = Math.round(item.main.temp)
      
      tempMax[dayIndex] = Math.max(temp, tempMax[dayIndex])
      tempMin[dayIndex] = Math.min(temp, tempMin[dayIndex])

      if (isNextDay && dayIndex === 4) {
        break
      }
      else if (isNextDay) {
        dayIndex++
        detailedForecast[dayIndex] = []
      }

      previousDate = localDate

      detailedForecast[dayIndex].push({
        temp: temp,
        feels_like: Math.round(item.main.feels_like),
        pressure: item.main.pressure,
        humidity: item.main.humidity,
        wx_main: item.weather[0].main,
        wx_desc: item.weather[0].description,
        wx_icon: item.weather[0].icon,
        precip_prob: item.pop,
        cloud_cover: item.clouds.all,
        wind_deg: item.wind.deg,
        wind_speed: metersPerSecondToMilesPerHour(item.wind.speed),
        wind_gust: metersPerSecondToMilesPerHour(item.wind.gust),
        date: `${getDayOfWeekString(localDate)} ${localDate.getDate()}`,
        time: localDate.toTimeString().slice(0, 5)
      })
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
    
    setMetaForecast(metaForecast)
    setDetailedForecast(detailedForecast)

    console.log('Meta Forecast : ', metaForecast)
    console.log('Detailed Forecast : ', detailedForecast)
  }

  return [metaForecast, detailedForecast, parseAndTransformForecast]
}