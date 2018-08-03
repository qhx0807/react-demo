import React, { Component } from 'react'
import { Button } from 'antd'
// import styles from './Login.css'
// import styles from './Login.less'
import styles from './Login.css'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      a: 'Login'
    }
  }
  render () {
    return (
      <div>
        <div className={ styles.loginBox }>1212</div>
        <p className="loginBox">1212</p>
        <Button type="primary">Login</Button>
      </div>
    )
  }
  componentDidMount () {
    console.log(styles)
  }
  clickHandler = () => {
    alert(this.state.a)
  }
}

export default Login
