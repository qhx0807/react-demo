import React, { Component } from 'react'
import { Button } from 'antd'
import styles from './Login.less'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      a: 'Login'
    }
  }
  render () {
    return (
      <div className={styles.login}>
        <div className={styles.loginBox}>121</div>
        <Button>Login</Button>
      </div>
    )
  }
  componentDidMount () {
    console.log(styles)
  }
  clickHandler = () => {
    this.props.history.push('/about')
  }
}

export default Login
