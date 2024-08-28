import './home.css'
import Search from '../features/Search/Search'

function Home() {
  return (
    <>
      <div className="container">
        <div className="leftPanel">
          <div id='searchBoxContainer'>
            <Search
              placeholder='Enter Location...'
            />
          </div>
          <div id='recentLocationsContainer'>

          </div>
        </div>
        <div className="rightPanel">

        </div>
      </div>
    </>
  )
}

export default Home
