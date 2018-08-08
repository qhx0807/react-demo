import React, { Component } from 'react'
import { Button } from 'antd'
import './Login.less'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      a: 'Login'
    }
  }
  render () {
    return (
      <div className="login">
        <div className="">121</div>
        <Button>Login</Button>
      </div>
    )
  }
  componentDidMount () {
    
  }
  clickHandler = () => {
    this.props.history.push('/about')
  }
}

export default Login
