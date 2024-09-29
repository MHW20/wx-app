import { useState } from 'react'
import SearchContainer from '../features/Search/SearchContainer'
import RecentLocationsContainer from '../features/RecentLocations/RecentLocationsContainer'
import WeatherForecastContainer from '../features/WeatherForecast/WeatherForecastContainer'
import OutsideClickTracker from '../features/OutsideClickTracker/OutsideClickTracker'
import './home.css'
import { useSelector } from 'react-redux'
import { RootState } from '../state/store'

function Home() {
  const [toggleSearch, setToggleSearch] = useState<boolean>(false)

  const selectedLocation = useSelector((state: RootState) => state.location.selectedLocation)
  const toggleRecentLocations = useSelector((state: RootState) => state.location.toggleRecentLocations)

  console.log('Selected Location : ', selectedLocation)
  console.log('Toggle Recent Location : ', toggleRecentLocations)
  console.log('RE-RERENDERED HOME PAGE')
  return (
    <>
      <div className="container">
        <div className="search-wrapper">
          <div id='search-box-container'>
            <SearchContainer 
              setToggleSearch={setToggleSearch}
              toggleSearch={toggleSearch}
            />
          </div>
        <OutsideClickTracker setToggleVisible={setToggleSearch}>
          { ( toggleSearch && (!selectedLocation || toggleRecentLocations)) && (
            <div 
              id='recent-locations-container' 
              style={{ display: toggleRecentLocations ? 'block' : 'none' }} 
            >
              <div id='recent-locations-text'>Recent Locations</div>
              <div id='recent-locations-wrapper'>
                <RecentLocationsContainer />
              </div>
            </div>
          ) }
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
