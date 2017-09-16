import React, { Component } from 'react'
import './App.css'

class App extends Component {
  // constructor by convention
  constructor(props) {
    super(props) // inherited from any parent component
    // however we want to add reactivity (su phan ung) in a way for the user to interact with it here => state come in
    // each component has its own local state with respect to the global state of the entire app.
    this.state = { // => local state, always an object with key and value
      // value can be any valid javascript as stream {''}, number {1} or another object { {} }
      deadline: 'December 25, 2017'
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <div>
          <div className="Clock-days">14 days</div>
          <div className="Clock-hours">30 hours</div>
          <div className="Clock-minutes">15 minutes</div>
          <div className="Clock-seconds">20 seconds</div>
        </div>
        <div>
          <input placeholder='new text'/>
          <button>Submit</button>
        </div>
      </div>
    )
  }
}

export default App