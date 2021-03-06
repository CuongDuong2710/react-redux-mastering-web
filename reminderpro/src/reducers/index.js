// --REDUCERS--What reducers do is simply take the state in action and return to entirely new instances of state.
// 3. Add a reducer to the reducers folder that handles this action creator.
import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from '../constants'
import { bake_cookie, read_cookie } from 'sfcookies'

const reminder = (action) => {
  const { text, dueDate } = action
  return {
    id: Math.random(),
    text,
    dueDate
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
  state = read_cookie('reminders') // load cookie
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)] // spread operator allows us to do is copy the contents of one array object into another array object.
      // console.log('reminders as state', reminders)
      bake_cookie('reminders', reminders) // store reminders into cookie
      return reminders
    case DELETE_REMINDER:
      reminders = removeById(state, action.id)
      bake_cookie('reminders', reminders)
      return reminders
    case CLEAR_REMINDER:
      reminders = []
      bake_cookie('reminders', reminders)
      return reminders
    default:
      return state
  }
}

export default reminders