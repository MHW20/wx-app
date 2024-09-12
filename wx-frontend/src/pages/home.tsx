import './home.css'
import SearchContainer from '../features/Search/SearchContainer'
import RecentLocationsContainer from '../features/RecentLocations/RecentLocationsContainer'
import { useState } from 'react'
import WeatherForecastContainer from '../features/WeatherForecast/WeatherForecastContainer'
import { LocationInfo } from '../features/Search/types/searchTypes'

function Home() {
  const [selectedLocation, setSelectedLocation] = useState<LocationInfo>()
  
  console.log('RE-RERENDERED HOME PAGE')
  return (
    <>
      <div className="container">
        <div className="search-wrapper">
          <div id='search-box-container'>
            <SearchContainer 
              setSelectedLocation={setSelectedLocation}
            />
          </div>
          <div id='recent-locations-container'>
            <div id='recent-locations-text'>Recent Locations</div>
            <div id='recent-locations-wrapper'>
              <RecentLocationsContainer 
                setSelectedLocation={setSelectedLocation}
              />
            </div>
          </div>
        </div>
        <div className="forecast-wrapper">
          <div className='weather-forecast-container'>
            { selectedLocation ? 
              ( <WeatherForecastContainer 
                  selectedLocation={selectedLocation}
                /> 
              ) :
              (<p id='empty-location-info'>
                Select a location
              </p>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
