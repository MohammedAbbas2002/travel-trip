import TripsListContext from '../../context/TripsListContext'

import './index.css'

const TripItem = props => {
  const {tripDetails} = props

  const {id, endLocation, startDate, endDate} = tripDetails

  return (
    <TripsListContext.Consumer>
      {value => {
        const {removeTrip} = value

        return (
          <li>
            <h1>{endLocation}</h1>
          </li>
        )
      }}
    </TripsListContext.Consumer>
  )
}

export default TripItem
