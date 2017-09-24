import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goalRef } from '../firebase'
import { setGoals } from '../actions'

class GoalList extends Component {
  // So after our goal is completed renders, a listener
  componentDidMount() {
    // first argument 'value' can listen to multiple events as child add, child remove events ...
    goalRef.on('value', snap => {
      let goals = []
      snap.forEach(goal => { // for each 'goal' element
        // let goalObject = goal.val()
        // console.log('goalObject', goalObject)
        const { email, title } = goal.val()
        goals.push({ email, title })
      })
      console.log('goals', goals)
      this.props.setGoals(goals)
    })
  }

  // We'll have an action creator that sets the goals globally in our store
  render() {
    console.log('this.props.goals', this.props.goals)
    return (
      <div>Goal List</div>
    )
  }
}

// Takes our state and then return our goals from state as an object
function mapStateToProps(state) {
  const { goals } = state
  return {
    goals
  }
}

export default connect(null, { setGoals })(GoalList)