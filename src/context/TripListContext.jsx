import React from 'react'

const TripListContext = React.createContext({
  tripList: [],
  addTrip: () => {},
  removeTrip: () => {},
})

export default TripListContext
