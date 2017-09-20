import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addReminder, deleteReminder } from '../actions'
import moment from 'moment'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  addReminder() {
    console.log('this.state.dueDate', this.state.dueDate)
    this.props.addReminder(this.state.text, this.state.dueDate)
  }

  deleteReminder(id) {
    // console.log('deleting in application', id)
    // console.log('this.props', this.props)
    this.props.deleteReminder(id)
  }

  renderReminders() {
    const { reminders } = this.props
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                </div>
                <div
                  className="list-item delete-button"
                  onClick={() => this.deleteReminder(reminder.id)}
                >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    // console.log('this.props', this.props)
    return (
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange={event => this.setState({text: event.target.value})}
            />
            <input 
              className="form-control"
              type="datetime-local"
              onChange={event => this.setState({dueDate: event.target.value})}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
          {this.renderReminders()}
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

// map our global state into our component by props
// You do so with the mapStateToProps function. This is redux's way of taking its state and mapping it onto a specific component's 
function mapStateToProps(state) {
  // console.log('state', state)
  return {
    reminders: state // this is because in index.js, 'reminders' is a global reducer for our entire application
  }
}

// 1st parameter which allows us to listen to a state as an argument 
// We're only adding 'addReminder' object as my key and value
export default connect(mapStateToProps, { addReminder, deleteReminder })(App)

// The beauty of redux gives us so much power because we can access this part of our global state in any future component that we create.
// We simply need to connet our component (App) to the global state in a similar manner. And then we can bind any action creat (addReminder) or redefined in the future
// in order to update the state of all our components and our entire application