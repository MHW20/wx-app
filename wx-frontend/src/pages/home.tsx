import './home.css'
import SearchContainer from '../features/Search/SearchContainer'
import RecentLocationsContainer from '../features/RecentLocations/RecentLocationsContainer'
import { useState } from 'react'
import WeatherForecastContainer from '../features/WeatherForecast/WeatherForecastContainer'

function Home() {
  return (
    <>
      <div className="container">
        <div className="search-wrapper">
          <div id='search-box-container'>
            <SearchContainer />
          </div>
          <div id='recent-locations-text'>Recent Locations</div>
          <div id='recent-locations-container'>
            <RecentLocationsContainer />
          </div>
        </div>
        <div className="forecast-wrapper">
          <div id='weather-forecast-container'>
            <WeatherForecastContainer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
