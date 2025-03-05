import {Component} from 'react'
import {MdErrorOutline} from 'react-icons/md'

import Footer from '../Footer'

import './index.css'

const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]

class BookANewTrip extends Component {
  state = {
    activeStep: stepsList[0].stepId,
    name: '',
    startLocation: '',
    endLocation: '',
    isNameEmpty: false,
    isStartLocationEmpty: false,
    isEndLocationEmpty: false,
    startDate: '',
    endDate: '',
    isStartDateEmpty: false,
    isEndDateEmpty: false,
    isEndDateLesserThanStartDate: false,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeStartLocation = event => {
    this.setState({startLocation: event.target.value})
  }

  onChangeEndLocation = event => {
    this.setState({endLocation: event.target.value})
  }

  onSubmitYourDetailsForm = event => {
    event.preventDefault()

    const {name, startLocation, endLocation} = this.state

    if (name !== '' && startLocation !== '' && endLocation !== '') {
      this.setState({activeStep: stepsList[1].stepId})
    } else {
      if (name === '') {
        this.setState({isNameEmpty: true})
      } else {
        this.setState({isNameEmpty: false})
      }
      if (startLocation === '') {
        this.setState({isStartLocationEmpty: true})
      } else {
        this.setState({isStartLocationEmpty: false})
      }
      if (endLocation === '') {
        this.setState({isEndLocationEmpty: true})
      } else {
        this.setState({isEndLocationEmpty: false})
      }
    }
  }

  renderYourDetailsView = () => {
    const {
      name,
      startLocation,
      endLocation,
      isNameEmpty,
      isStartLocationEmpty,
      isEndLocationEmpty,
    } = this.state

    const nameRedBorder = isNameEmpty ? 'red-border' : ''

    const nameRedPlaceholderText = isNameEmpty ? 'red-placeholder-text' : ''

    const startLocationRedBorder = isStartLocationEmpty ? 'red-border' : ''

    const startLocationRedPlaceholderText = isStartLocationEmpty
      ? 'red-placeholder-text'
      : ''

    const endLocationRedBorder = isEndLocationEmpty ? 'red-border' : ''

    const endLocationRedPlaceholderText = isEndLocationEmpty
      ? 'red-placeholder-text'
      : ''

    return (
      <div className="your-details-container">
        <h1 className="your-details-heading">Your Details</h1>
        <p className="your-details-description">
          Enter your name and location details
        </p>
        <form onSubmit={this.onSubmitYourDetailsForm}>
          <div className="name-input-container">
            <label htmlFor="name" className="label">
              Name
            </label>
            <br />
            <div
              className={`name-input-and-error-icon-container ${nameRedBorder}`}
            >
              <input
                type="text"
                placeholder="Enter name"
                className={`name-input ${nameRedPlaceholderText}`}
                id="name"
                value={name}
                onChange={this.onChangeName}
              />
              {isNameEmpty && <MdErrorOutline size="20" color="#ef4444" />}
            </div>
          </div>
          {isNameEmpty && <p className="error-message">Enter your name</p>}

          <div className="start-location-input-container">
            <label htmlFor="startLocation" className="label">
              Start location
            </label>
            <br />
            <div
              className={`start-location-input-and-error-icon-container ${startLocationRedBorder}`}
            >
              <input
                type="text"
                placeholder="Enter name"
                className={`start-location-input ${startLocationRedPlaceholderText}`}
                id="startLocation"
                value={startLocation}
                onChange={this.onChangeStartLocation}
              />
              {isStartLocationEmpty && (
                <MdErrorOutline size="20" color="#ef4444" />
              )}
            </div>
          </div>
          {isStartLocationEmpty && (
            <p className="error-message">Enter your start location</p>
          )}

          <div className="end-location-input-container">
            <label htmlFor="endLocation" className="label">
              End location
            </label>
            <br />
            <div
              className={`end-location-input-and-error-icon-container ${endLocationRedBorder}`}
            >
              <input
                type="text"
                placeholder="Enter end location"
                className={`end-location-input ${endLocationRedPlaceholderText}`}
                id="endLocation"
                value={endLocation}
                onChange={this.onChangeEndLocation}
              />
              {isEndLocationEmpty && (
                <MdErrorOutline size="20" color="#ef4444" />
              )}
            </div>
          </div>
          {isEndLocationEmpty && (
            <p className="error-message">Enter your end location</p>
          )}

          <div className="next-button-container">
            <button type="submit" className="next-button">
              Next
            </button>
          </div>
        </form>
      </div>
    )
  }

  onChangeStartDate = event => {
    this.setState({startDate: event.target.value})
  }

  onChangeEndDate = event => {
    this.setState({endDate: event.target.value})
  }

  onSubmitDateSelectionForm = event => {
    event.preventDefault()

    const {startDate, endDate} = this.state

    if (startDate !== '' && endDate !== '') {
      if (endDate < startDate) {
        this.setState({
          isEndDateLesserThanStartDate: true,
          isEndDateEmpty: false,
          isStartDateEmpty: false,
        })
      } else {
        this.setState({activeStep: stepsList[2].stepId})
      }
    } else {
      if (startDate === '') {
        this.setState({isStartDateEmpty: true})
      } else {
        this.setState({isStartDateEmpty: false})
      }
      if (endDate === '') {
        this.setState({isEndDateEmpty: true})
      } else {
        this.setState({isEndDateEmpty: false})
      }
    }
  }

  onGoToYourDetailsForm = () => {
    this.setState({activeStep: stepsList[0].stepId})
  }

  renderDateSelectionView = () => {
    const {
      startDate,
      endDate,
      isStartDateEmpty,
      isEndDateEmpty,
      isEndDateLesserThanStartDate,
    } = this.state

    const startDateRedBorder = isStartDateEmpty ? 'red-border' : ''

    const startDateRedPlaceholderText = isStartDateEmpty
      ? 'red-placeholder-text'
      : ''

    const endDateRedBorder = isEndDateEmpty ? 'red-border' : ''

    const endDateRedPlaceholderText = isEndDateEmpty
      ? 'red-placeholder-text'
      : ''

    return (
      <div className="date-selection-container">
        <h1 className="date-selection-heading">Date Selection</h1>
        <p className="date-selection-description">
          Select your Start and End Date.
        </p>
        <form onSubmit={this.onSubmitDateSelectionForm}>
          <div className="start-date-input-container">
            <label htmlFor="startDate" className="label">
              Start Date
            </label>
            <br />
            <input
              type="date"
              className={`start-date-input ${startDateRedBorder} ${startDateRedPlaceholderText}`}
              id="startDate"
              value={startDate}
              onChange={this.onChangeStartDate}
            />
          </div>
          {isStartDateEmpty && (
            <p className="error-message">Select start date</p>
          )}
          <div className="end-date-input-container">
            <label htmlFor="endDate" className="label">
              End Date
            </label>
            <br />
            <input
              type="date"
              className={`end-date-input ${endDateRedBorder} ${endDateRedPlaceholderText}`}
              id="endDate"
              value={endDate}
              onChange={this.onChangeEndDate}
            />
          </div>
          {isEndDateEmpty && <p className="error-message">Select end date</p>}
          {isEndDateLesserThanStartDate && (
            <p className="error-message">
              The end date cannot be less than the start date
            </p>
          )}
          <div className="previous-and-next-button-container">
            <button
              type="button"
              className="previous-button"
              onClick={this.onGoToYourDetailsForm}
            >
              Previous
            </button>
            <button type="submit" className="next-button">
              Next
            </button>
          </div>
        </form>
      </div>
    )
  }

  renderStep = () => {
    const {activeStep} = this.state

    switch (activeStep) {
      case stepsList[0].stepId:
        return this.renderYourDetailsView()
      case stepsList[1].stepId:
        return this.renderDateSelectionView()
      case stepsList[2].stepId:
        return null
      case stepsList[3].stepId:
        return null
      case stepsList[4].stepId:
        return null
      default:
        return null
    }
  }

  render() {
    const {activeStep} = this.state

    return (
      <>
        <div className="book-a-new-trip-container">
          <ul className="hr-lines-list">
            {stepsList.map(eachStep => {
              const active = eachStep.stepId === activeStep ? 'active' : ''

              return (
                <li key={eachStep.stepId}>
                  <hr className={`hr-line ${active}`} />
                </li>
              )
            })}
          </ul>
          {this.renderStep()}
        </div>
        <Footer />
      </>
    )
  }
}

export default BookANewTrip
