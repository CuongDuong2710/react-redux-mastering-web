import React from 'react'
import ReactDOM from 'react-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory)

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