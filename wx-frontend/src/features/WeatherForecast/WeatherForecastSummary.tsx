import { WeatherForecastSummaryProps } from "./types/weatherForecastTypes";
import './WeatherForecastSummary.css'

const WeatherForecastSummary: React.FC<WeatherForecastSummaryProps> = ({
  metaWeatherForecast
}) => {
  return (
    <div className="summary-container">
      { metaWeatherForecast &&
        Array.from(metaWeatherForecast?.max_temp.keys()).map((index) => {
        return (
          <div 
            className='weather-item' 
            key={index}
          >
            <div className='date-row'>
              <div>Tue 10th</div>
            </div>
            <div className='wx-symbol-col'>
              <div>Rain</div>
            </div>
            <div>
              <div>{metaWeatherForecast.max_temp[index]}</div>
            </div>
            <div>
              <div>{metaWeatherForecast.min_temp[index]}</div>
            </div>
          </div>
        ) 
      })
    }
    </div>
  )
}

export default WeatherForecastSummary;