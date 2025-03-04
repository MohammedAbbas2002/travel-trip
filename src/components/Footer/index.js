import {AiOutlineHome} from 'react-icons/ai'
import {RiSuitcase2Line} from 'react-icons/ri'
import {BiLogOut} from 'react-icons/bi'
import {Link} from 'react-router-dom'

import './index.css'

const Footer = () => (
  <nav className="footer-navbar">
    <ul className="footer-navbar-list">
      <li>
        <Link to="/" className="link">
          <button className="footer-navbar-item-icon-button">
            <AiOutlineHome color="#7A8493" size="20" />
          </button>
        </Link>
      </li>
      <li>
        <Link to="/my-trips" className="link">
          <button className="footer-navbar-item-icon-button">
            <RiSuitcase2Line color="#7A8493" size="20" />
          </button>
        </Link>
      </li>
      <li>
        <Link to="/" className="link">
          <button className="footer-navbar-item-icon-button">
            <BiLogOut color="#7A8493" size="20" />
          </button>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Footer
