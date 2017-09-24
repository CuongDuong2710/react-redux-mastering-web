import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { browserHistory } from 'react-router'
import { firebaseApp } from './firebase'

import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

// handle state of authentication
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    // navigate user to the dashboard or application
    console.log('user has signed in or up', user)
    browserHistory.push('./app')
  } else {
    // redirect them to the site and component whenever they're not signed in
    console.log('user has signed out or still needs to sign in.')
    browserHistory.replace('./signin')
  }
})

ReactDOM.render(
   // 'browserHistory' allows us to navigate to different routes that we specify in different components with method like push, pop and replace
  <BrowserRouter>
    <div>
      <Route path="/app" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </div>
  </BrowserRouter>, document.getElementById('root')
)