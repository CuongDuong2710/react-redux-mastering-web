import React, { Component } from 'react'
import Clock from './Clock'
import './App.css'

class App extends Component {
  // constructor by convention
  constructor(props) {
    super(props) // inherited from any parent component
    // however we want to add reactivity (su phan ung) in a way for the user to interact with it here => state come in
    // each component has its own local state with respect to the global state of the entire app.
    this.state = { // => local state, always an object with key and value
      // value can be any valid javascript as stream {''}, number {1} or another object { {} }
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline() {
    // never mutate or change state directly, component will not read render => error
    // this.state.deadline = 'November 25, 2017
    // console.log(this.state)
    this.setState({deadline: this.state.newDeadline})
  }

  // if we simply call 'this.changeDeadline' without anonymous function,
  // it will be loop and cause crash.
  // Arrow function allows us to call it just once
  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <div>
          <Clock />
        </div>
        <div>
          <input 
            placeholder='new text'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <button onClick={() => this.changeDeadline()}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default App