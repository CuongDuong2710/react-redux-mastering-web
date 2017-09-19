import { ADD_REMINDER, DELETE_REMINDER } from '../constants'

// 2. Add an action creator to the actions folder. Return an action JavaScript object with a type of the constant you created.
export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text // text: text
  }
  console.log('action in addReminder', action)
  return action
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('deleting in actions', action)
  return action
}