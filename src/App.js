import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import BookANewTrip from './components/BookANewTrip'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route exact path="/book-a-new-trip" component={BookANewTrip} />
  </Switch>
)

export default App
