import './index.css'

const Header = () => (
  <nav className="header-navbar">
    <h1 className="header-navbar-website-logo">Travel Trip</h1>
    <ul className="header-navbar-list">
      <li className="header-navbar-item">Home</li>
      <li className="header-navbar-item">My Trips</li>
    </ul>
    <button className="header-navbar-logout-button">Logout</button>
  </nav>
)

export default Header
