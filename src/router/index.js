import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../components/User/Login'
import Loading from '../components/Loading/Loading'
const Home = Loadable({ loader: () => import('../components/Home'), loading: Loading })
const About = Loadable({ loader: () => import('../components/About'), loading: Loading })
const User = Loadable({ loader: () => import('../components/User/User'), loading: Loading })

class RouterConfig extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/Loading" component={Loading}></Route>
          <Route path="/user" component={User}></Route>
        </Switch>
      </Router>
    )
  }
}

export default RouterConfig
