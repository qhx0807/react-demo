import React, { Component } from 'react'
import { Button } from 'antd'

class About extends Component {
  constructor (props) {
    super(props)
    this.state = {
      a: 'about'
    }
  }
  render () {
    return (
      <Button type="danger" onClick={this.clickHandler} >About</Button>
    )
  }
  clickHandler = () => {
    alert(this.state.a)
  }
}

export default About
