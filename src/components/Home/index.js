import {Link} from 'react-router-dom'

import Footer from '../Footer'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    {/* Mobile Device */}
    <div className="mobile-home-container">
      <div className="mobile-home-image-container">
        <img
          src="https://res.cloudinary.com/dt7mi4nem/image/upload/v1741060875/image_5_1_hvzpl8.png"
          className="mobile-home-image"
        />
      </div>
      <h1 className="mobile-home-heading">Travel. Relax. Memories.</h1>
      <p className="mobile-home-description">
        With travel trip you can experience new travel and the best tourist
        destinations.
      </p>
      <div className="mobile-home-book-a-new-trip-button-container">
        <Link to="/book-a-new-trip" className="link">
          <button type="button" className="mobile-home-book-a-new-trip-button">
            Book a New Trip
          </button>
        </Link>
      </div>
    </div>
    <Footer activeNavbarItem="HOME" />
    {/* Desktop Device */}
    <Header activeNavbarItem="HOME" />
    <div className="desktop-home-container">
      <div className="desktop-home-content-container">
        <h1 className="desktop-home-heading">Travel. Relax. Memories.</h1>
        <p className="desktop-home-description">
          With travel trip you can experience new travel and the best tourist
          destinations.
        </p>
        <Link to="/book-a-new-trip" className="link">
          <button type="button" className="desktop-home-book-a-new-trip-button">
            Book a New Trip
          </button>
        </Link>
      </div>
      <img
        src="https://res.cloudinary.com/dt7mi4nem/image/upload/v1741060456/image_5_zvyxp6.png"
        className="desktop-home-image"
      />
    </div>
  </>
)

export default Home
