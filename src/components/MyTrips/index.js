import {Link} from 'react-router-dom'

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
          <Header activeNavbarItem="MY_TRIPS" />
          {tripsList.length === 0 ? (
            <>
              <div className="mobile-no-trips-container">
                <img
                  src="https://res.cloudinary.com/dt7mi4nem/image/upload/v1741297116/Frame_1000003903_1_eqfbo7.png"
                  className="no-trips-image"
                />
                <h1 className="mobile-no-trips-heading">No upcoming trips.</h1>
                <p className="mobile-no-trips-description">
                  When you book a trip, you will see your trip details here.
                </p>
                <Link className="link" to="/book-a-new-trip">
                  <button className="book-a-new-trip-button">
                    Book a New Trip
                  </button>
                </Link>
              </div>
              <div className="desktop-no-trips-container">
                <img
                  src="https://res.cloudinary.com/dt7mi4nem/image/upload/v1741297116/Frame_1000003903_1_eqfbo7.png"
                  className="no-trips-image"
                />
                <h1 className="desktop-no-trips-heading">No upcoming trips.</h1>
                <p className="desktop-no-trips-description">
                  When you book a trip, you will see your trip details here.
                </p>
                <Link className="link" to="/book-a-new-trip">
                  <button className="book-a-new-trip-button">
                    Book a New Trip
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="mobile-my-trips-container">
                <h1 className="my-trips-heading">My Trips</h1>
                <ul className="my-trips-list">
                  {tripsList.map(eachTrip => (
                    <TripItem key={eachTrip.id} tripDetails={eachTrip} />
                  ))}
                </ul>
              </div>
              <div className="desktop-my-trips-container">
                <h1 className="my-trips-heading">My Trips</h1>
                <ul className="my-trips-list">
                  {tripsList.map(eachTrip => (
                    <TripItem key={eachTrip.id} tripDetails={eachTrip} />
                  ))}
                </ul>
              </div>
            </>
          )}
          <Footer activeNavbarItem="MY_TRIPS" />
        </>
      )
    }}
  </TripsListContext.Consumer>
)

export default MyTrips
