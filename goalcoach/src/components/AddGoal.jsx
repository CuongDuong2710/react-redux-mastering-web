import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goalRef } from '../firebase'

class AddGoal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  addGoal() {
    console.log('this', this)
    const { title } = this.state
    const { email } = this.props.user // get this.props.email from connect() function below
    // it will automatically update database with key random
    goalRef.push({ email , title})
  }

  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add a goal"
            className="form-control"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({title : event.target.value })}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.addGoal()}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

// get state {email: "test@test.com"} from reducers and map to this.props of this component
function mapStateToProps(state) {
  const { user } = state
//   console.log('state in AddGoal.jsx', state)
  return {
    user
  }
}

export default connect(mapStateToProps, null)(AddGoal)