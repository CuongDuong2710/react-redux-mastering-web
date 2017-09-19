// --REDUCERS--What reducers do is simply take the state in action and return to entirely new instances of state.
// 3. Add a reducer to the reducers folder that handles this action creator.
import { ADD_REMINDER, DELETE_REMINDER } from '../constants'

const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

// It's (state = []) not always an empty array. 
// This assignment in the parameter only happens if the passed array parameter is null or empty
//  Since state is usually not empty, the items array is usually valid.
const removeById = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id)
  console.log('new reduced reminders', reminders)
  return reminders
}

const reminders = (state = [], action) => {
  let reminders = null
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)] // spread operator allows us to do is copy the contents of one array object into another array object.
      console.log('reminders as state', reminders)
      return reminders
    case DELETE_REMINDER:
      reminders = removeById(state, action.id)
      return reminders
    default:
      return state
  }
}

export default reminders