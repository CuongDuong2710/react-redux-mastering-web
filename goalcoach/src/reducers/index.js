import { SIGNED_IN } from '../constants'

let user = {
  email: null
}

export default (state = user, action) => {
  switch(action.type) {
    case SIGNED_IN:
      // grab new 'email' from action and set to user
      const { email } = action
      user = {
        email
      }
      return user
    default:
      return state
  }
}