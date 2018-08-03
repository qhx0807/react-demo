import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../components/Login'
import Home from '../components/Home'

const About = (location, cb) => {
  require.ensure([], (require) => {
    cb(null, require('../components/About').default)
  }, 'About')
}

class RouterConfig extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/home" component={Home}></Route>
        </Switch>
      </Router>
    )
  }
}

export default RouterConfig
