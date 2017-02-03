import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { MainContainer, AuthFormContainer } from 'containers'

const routes = (
  <Router history={hashHistory} >
    <Router path='/' component={MainContainer} >
      <IndexRoute component={AuthFormContainer} />
    </Router>
  </Router>
)

export default routes
