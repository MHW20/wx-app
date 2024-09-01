import './home.css'
import SearchContainer from '../features/Search/SearchContainer'

function Home() {
  return (
    <>
      <div className="container">
        <div className="mainPanel">
          <div id='searchBoxContainer'>
            <SearchContainer
            />
          </div>
          <div id='recentLocationsContainer'>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
