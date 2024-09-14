import { useState } from 'react'
import SearchContainer from '../features/Search/SearchContainer'
import RecentLocationsContainer from '../features/RecentLocations/RecentLocationsContainer'
import WeatherForecastContainer from '../features/WeatherForecast/WeatherForecastContainer'
import OutsideClickTracker from '../features/OutsideClickTracker/OutsideClickTracker'
import { LocationInfo } from '../features/Search/types/searchTypes'
import './home.css'

function Home() {
  const [selectedLocation, setSelectedLocation] = useState<LocationInfo>()
  const [toggleSearch, setToggleSearch] = useState<boolean>(false)

  console.log('TOGGLE SEARCH : ', toggleSearch)
  console.log('RE-RERENDERED HOME PAGE')
  return (
    <>
      <div className="container">
        <div className="search-wrapper">
          <div id='search-box-container'>
            <SearchContainer 
              setSelectedLocation={setSelectedLocation}
              setToggleSearch={setToggleSearch}
              toggleSearch={toggleSearch}
            />
          </div>
        <OutsideClickTracker setToggleVisible={setToggleSearch}>
          <div 
            id='recent-locations-container' 
            style={{ display: toggleSearch ? 'block' : 'none' }} 
          >
            <div id='recent-locations-text'>Recent Locations</div>
            <div id='recent-locations-wrapper'>
              <RecentLocationsContainer 
                setSelectedLocation={setSelectedLocation}
            />
            </div>
          </div>
        </OutsideClickTracker> 

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
