import React, { Component } from 'react'
import CopyRight from '../Common/CopyRight'
import { Switch, Route } from 'react-router-dom'
import styles from './User.less'
import Login from './Login'
import Register from './Register'

class User extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <Switch>
            <Route path="/user" exact component={Login}></Route>
            <Route path="/user/login" component={Login}></Route>
            <Route path="/user/register" component={Register}></Route>
          </Switch>
        </div>
        <div className={styles.footer}>
          <CopyRight></CopyRight>
        </div>
      </div>
    )
  }
}

export default User
