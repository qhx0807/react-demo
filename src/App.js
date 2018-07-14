import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Swtich, Route, Router, hashHistory, Link} from 'react-router-dom';
import { Button } from 'antd'

import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/Story" component={Home}/>
    </Route>
  </Router>
  ),document.body
);

export default App
