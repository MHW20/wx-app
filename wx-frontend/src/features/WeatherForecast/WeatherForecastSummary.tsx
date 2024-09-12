import { WeatherForecastSummaryProps } from "./types/weatherForecastTypes";
import './WeatherForecastSummary.css'

const WeatherForecastSummary: React.FC<WeatherForecastSummaryProps> = ({
  metaWeatherForecast,
  handleSelectedForecastDate
}) => {
  return (
    <div className="summary-container">
      { metaWeatherForecast &&
        metaWeatherForecast?.max_temp.map((element, index) => {
        return (
          <div 
            className='weather-item'
            key={index}
            onClick={() => handleSelectedForecastDate(index)}
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