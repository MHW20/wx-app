import './home.css'
import SearchContainer from '../features/Search/SearchContainer'
import RecentLocationsContainer from '../features/RecentLocations/RecentLocationsContainer'
import { useState } from 'react'
import WeatherForecastContainer from '../features/WeatherForecast/WeatherForecastContainer'
import { LocationInfo } from '../features/Search/types/searchTypes'

function Home() {
  const [selectedLocation, setSelectedLocation] = useState<LocationInfo>()
  return (
    <>
      <div className="container">
        <div className="search-wrapper">
          <div id='search-box-container'>
            <SearchContainer 
              setSelectedLocation={setSelectedLocation}
            />
          </div>
          <div id='recent-locations-text'>Recent Locations</div>
          <div id='recent-locations-container'>
            <RecentLocationsContainer 
              setSelectedLocation={setSelectedLocation}
            />
          </div>
        </div>
        <div className="forecast-wrapper">
          <div id='weather-forecast-container'>
            { selectedLocation ? 
              ( <WeatherForecastContainer 
                selectedLocation={selectedLocation}
              /> ) :
              (<div></div>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
