import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './dashboard'
import Profile from './profile'
import Main from './main'

const Home = () => {
  return (
    <div>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard/profile/:user" component={Profile} />
      <Route exact path="/dashboard/main" component={Main} />
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
