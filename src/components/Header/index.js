import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')

    const {history} = props

    history.replace('/login')
  }

  return (
    <nav className="header-navbar">
      <h1 className="header-navbar-website-logo">Travel Trip</h1>
      <ul className="header-navbar-list">
        <Link to="/" className="link">
          <li className="header-navbar-item">Home</li>
        </Link>
        <Link to="/my-trips" className="link">
          <li className="header-navbar-item">My Trips</li>
        </Link>
      </ul>
      <button className="header-navbar-logout-button" onClick={onLogout}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
