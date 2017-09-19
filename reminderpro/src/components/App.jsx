import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addReminder } from '../actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  addReminder() {
    console.log('this', this)
    this.props.addReminder(this.state.text)
  }
  render() {
    return (
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange={event => this.setState({text: event.target.value})}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
      </div>
    )
  }
}

// That dispatcher prompts does it binds action creators that we create 'addReminder' to the overall dispatch function
// Throughtout our whole react-redux application makes it accesible as props within this specific component.

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({addReminder}, dispatch)
// }

// We're only adding 'addReminder' object as my key and value
export default connect(null, { addReminder })(App)