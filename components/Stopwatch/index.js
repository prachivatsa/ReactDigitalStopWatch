// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timeNumber: 0}

  componentWillUnmount() {
    console.log('component unmounted')
    clearInterval(this.timeId)
  }

  onStart = () => {
    this.timeId = setInterval(this.starClock, 1000)
  }

  starClock = () => {
    this.setState(prevState => ({
      timeNumber: prevState.timeNumber + 1,
    }))
  }

  onReset = () => {
    const {timeNumber} = this.state

    clearInterval(this.timeId)
    this.setState({timeNumber: 0})
  }

  onstop = () => {
    const {timeNumber} = this.state
    clearInterval(this.timeId)
  }

  generateSecond = () => {
    const {timeNumber} = this.state

    const seconds = Math.floor(timeNumber % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }

    return seconds
  }

  generateMinutes = () => {
    const {timeNumber} = this.state
    const minutes = Math.floor(timeNumber / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {timeNumber} = this.state
    const mySec = this.generateSecond()
    const myMin = this.generateMinutes()
    const myTime = `${myMin}:${mySec}`
    console.log(myTime)
    return (
      <div className="bg-container">
        <div className="stop-watch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="stopWatchCard">
            <div className="header">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
                className="img"
              />
              <p>Timer</p>
              <h1>{myTime}</h1>
            </div>
            <div>
              <button className="start" onClick={this.onStart}>
                Start
              </button>
              <button className="stop" onClick={this.onstop}>
                Stop
              </button>
              <button className="reset" onClick={this.onReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

