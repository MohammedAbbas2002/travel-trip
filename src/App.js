import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'

import Login from './components/Login'
import Home from './components/Home'
import BookANewTrip from './components/BookANewTrip'
import MyTrips from './components/MyTrips'

import TripsListContext from './context/TripsListContext'

import './App.css'

class App extends Component {
  state = {
    tripsList: [
      {
        id: 1,
        endLocation: 'Vizag',
        startDate: '2025-03-10',
        endDate: '2025-03-20',
      },
      {
        id: 2,
        endLocation: 'Vizag',
        startDate: '2025-03-10',
        endDate: '2025-03-20',
      },
      {
        id: 2,
        endLocation: 'Vizag',
        startDate: '2025-03-10',
        endDate: '2025-03-20',
      },
    ],
  }

  addTrip = trip => {
    this.setState(prevState => ({tripsList: [...prevState.tripsList, trip]}))
  }

  removeTrip = () => {}

  render() {
    const {tripsList} = this.state

    return (
      <TripsListContext.Provider
        value={{tripsList, addTrip: this.addTrip, removeTrip: this.removeTrip}}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/book-a-new-trip" component={BookANewTrip} />
          <Route exact path="/my-trips" component={MyTrips} />
        </Switch>
      </TripsListContext.Provider>
    )
  }
}

export default App
