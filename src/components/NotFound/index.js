import './index.css'

const NotFound = () => (
  <>
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dt7mi4nem/image/upload/v1741308981/Group_7520_x94tnd.png"
        className="not-found-image"
        alt="not found"
      />
      <h1 className="not-found-heading">Page Not Found.</h1>
      <p className="not-found-description">
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </>
)

export default NotFound
