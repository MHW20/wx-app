import './home.css'
import SearchContainer from '../features/Search/SearchContainer'
import RecentLocationsContainer from '../features/RecentLocations/RecentLocationsContainer'
import { useState } from 'react'

function Home() {
  return (
    <>
      <div className="container">
        <div className="mainPanel">
          <div id='searchBoxContainer'>
            <SearchContainer />
          </div>
          <div id='recentLocationsContainer'>
            <RecentLocationsContainer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
