import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {pause: true, minutes: 25, seconds: '00'}

  timerStart = () => {
    console.log('clicked')
    this.timerId = setInterval(this.tick, 1000)
    this.setState({pause: false})
  }

  timerReset = () => {
    console.log('stopped')
    clearInterval(this.timerId)
    this.setState({pause: true, minutes: 25, seconds: '00'})
  }

  timerPause = () => {
    clearInterval(this.timerId)
    this.setState({pause: true})
  }

  tick = () => {
    const {seconds} = this.state
    if (seconds === '00') {
      this.setState(prevState => ({
        minutes: prevState.minutes - 1,
        seconds: 59,
      }))
    } else if (seconds === 1) {
      this.setState(() => ({seconds: '00'}))
    } else {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1,
      }))
    }
  }

  onChangeMinus = () => {
    const {pause} = this.state
    if (pause === true) {
      this.setState(prevState => ({minutes: prevState.minutes - 1}))
    }
  }

  onChangePlus = () => {
    const {pause} = this.state
    if (pause === true) {
      this.setState(prevState => ({minutes: prevState.minutes + 1}))
    }
  }

  render() {
    const {pause, minutes, seconds} = this.state
    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="card-container">
          <div className="left">
            <div className="heading">
              <h1>
                {minutes}:{seconds}
              </h1>
              <p>{pause ? 'Paused' : 'Running'}</p>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <div className="switch">
                {!pause ? (
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      alt="pause icon"
                      className="icon"
                      onClick={this.timerPause}
                    />
                    <button
                      type="button"
                      className="heading2"
                      onClick={this.timerPause}
                    >
                      Pause
                    </button>
                  </div>
                ) : (
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      alt="play icon"
                      className="icon"
                      onClick={this.timerStart}
                    />
                    <button
                      type="button"
                      className="heading2"
                      onClick={this.timerStart}
                    >
                      Start
                    </button>
                  </div>
                )}
              </div>
              <div className="switch">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="icon"
                  onClick={this.timerReset}
                />
                <button
                  type="button"
                  className="heading2"
                  onClick={this.timerReset}
                >
                  Reset
                </button>
              </div>
            </div>
            <p>Set Timer Limit</p>
            <div className="bottom">
              <button
                type="button"
                className="minus"
                onClick={this.onChangeMinus}
              >
                -
              </button>
              <p className="count">{minutes}</p>
              <button
                type="button"
                className="plus"
                onClick={this.onChangePlus}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
