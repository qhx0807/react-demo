import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from '../components/Loading/Loading'
const User = Loadable({ loader: () => import('../components/User/User'), loading: Loading })

class RouterConfig extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={User}></Route>
          <Route path="/user" component={User}></Route>
        </Switch>
      </Router>
    )
  }
}

export default RouterConfig
