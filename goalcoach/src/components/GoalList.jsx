import React, { Component } from 'react'
import { goalRef } from '../firebase'

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
    })
  }

  render() {
    return (
      <div>Goal List</div>
    )
  }
}

export default GoalList