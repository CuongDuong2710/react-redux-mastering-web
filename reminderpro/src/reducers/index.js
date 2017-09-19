// --REDUCERS--What reducers do is simply take the state in action and return to entirely new instances of state.
import { ADD_REMINDER } from '../constants'

const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const reminders = (state = [], action) => {
  let reminders = null
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)] // spread operator allows us to do is copy the contents of one array object into another array object.
      console.log('reminders as state', reminders)
      return reminders
    default:
      return state
  }
}

export default reminders