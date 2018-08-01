import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/Home'

class RouterConfig extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    )
  }
}

export default RouterConfig
