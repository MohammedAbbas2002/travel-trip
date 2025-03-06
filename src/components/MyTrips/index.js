import Footer from '../Footer'
import Header from '../Header'
import TripItem from '../TripItem'

import TripsListContext from '../../context/TripsListContext'

import './index.css'

const MyTrips = () => (
  <TripsListContext.Consumer>
    {value => {
      const {tripsList} = value

      return (
        <>
          {tripsList.length === 0 ? (
            ''
          ) : (
            <div className="my-trips-container">
              <h1 className="my-trips-heading">My Trips</h1>
              <ul className="my-trips-list">
                {tripsList.map(eachTrip => (
                  <TripItem key={eachTrip.id} tripDetails={eachTrip} />
                ))}
              </ul>
            </div>
          )}
          <Footer />
        </>
      )
    }}
  </TripsListContext.Consumer>
)

export default MyTrips
