import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'

import Login from './components/Login'
import Home from './components/Home'
import BookANewTrip from './components/BookANewTrip'

import TripListContext from './context/TripListContext'

import './App.css'

class App extends Component {
  state = {tripList: []}

  addTrip = trip => {
    this.setState(prevState => ({tripList: [...prevState.tripList, trip]}))
  }

  removeTrip = () => {}

  render() {
    const {tripList} = this.state

    console.log(tripList)

    return (
      <TripListContext.Provider
        value={{tripList, addTrip: this.addTrip, removeTrip: this.removeTrip}}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/book-a-new-trip" component={BookANewTrip} />
        </Switch>
      </TripListContext.Provider>
    )
  }
}

export default App
