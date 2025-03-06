import TripsListContext from '../../context/TripsListContext'

import './index.css'

const MyTrips = () => (
  <TripsListContext.Consumer>
    {value => {
      const {tripsList} = value

      return <p>{tripsList.length}</p>
    }}
  </TripsListContext.Consumer>
)

export default MyTrips
