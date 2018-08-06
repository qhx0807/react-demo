import React, { Component } from 'react'
import { Spin } from 'antd'
import './Loading.less'

class Loading extends Component {
  render () {
    return (
      <div className="loading-warp">
        <Spin ></Spin>
      </div>
    )
  }
}

export default Loading
