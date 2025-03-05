import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import BookANewTrip from './components/BookANewTrip'

import './App.css'

// Note: Use the lists in your code to pass the test cases
const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
]

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route exact path="/book-a-new-trip" component={BookANewTrip} />
  </Switch>
)

export default App
