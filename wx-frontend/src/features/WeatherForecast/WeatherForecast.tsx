import React from "react";
import { WeatherForecastProps } from "./types/weatherForecastTypes";
import { PiArrowDownDuotone } from "react-icons/pi";
import { GiCircle } from "react-icons/gi";
import { IconContext } from "react-icons";
import './WeatherForecast.css'

const WeatherForecast: React.FC<WeatherForecastProps> = ({
  detailedWeatherForecast,
  selectedForecastDate
}) => {

  const selectedDayForecast = detailedWeatherForecast[selectedForecastDate]
  document.getElementById('forecast-grid')?.style.setProperty('--colNum', `${selectedDayForecast.length}`)

  return (
    <div id='forecast-container'>
      <div id="forecast-grid">
      {selectedDayForecast.map((forecast, index) => (
        <div
          key={index}
          className="table-data"
        >
            {forecast.time}
        </div>
      ))}
      
      {selectedDayForecast.map((forecast, index) => (
          <div
            key={index}
            className="table-data"
          >
            <img src={`https://openweathermap.org/img/wn/${forecast.wx_icon}.png`}></img>
          </div>
      ))}

      
      {selectedDayForecast.map((forecast, index) => (
        <div 
          key={index}
          className="table-data"
        >{forecast.temp}</div>
      ))}

      {selectedDayForecast.map((forecast, index) => (
        <div
          key={index}
          className="table-data"
        >
          {forecast.feels_like}
        </div>
      ))}

      {selectedDayForecast.map((forecast, index) => (
        <div
          key={index}
          className="table-data"
        >
          {forecast.precip_prob}
        </div>
      ))}

      {selectedDayForecast.map((forecast, index) => (
        <div
          key={index}
          className="table-data"
        >
          <span className="wind-speed">{forecast.wind_speed}</span>
          <IconContext.Provider value={{ size: '1.5rem' }}>
            <GiCircle className="wind-circle" />
          </IconContext.Provider>
          <PiArrowDownDuotone
            className="wind-arrow"
            style={{ transform: `rotate(${forecast.wind_deg}deg)` }}
          />
        </div>
      ))}
    </div>
  </div>
  );
}

export default WeatherForecast;