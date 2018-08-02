import React, { Component } from 'react'
import { Button } from 'antd'
import axios from 'axios'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      a: 12,
      loading: false
    }
  }
  render () {
    return (
      <div>
        <h2>{this.state.a}</h2>
        <Button loading={this.state.loading} onClick={this.clickHandler.bind(this)}>Home Button</Button>
      </div>
    )
  }
  componentDidMount () {
    console.log(1)
  }
  async clickHandler () {
    this.setState({loading: true})
    let d = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(d)
    this.setState({loading: false})
  }
}

export default Home
