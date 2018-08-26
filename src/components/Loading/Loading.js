import React, { Component } from 'react'
import { Spin } from 'antd'
import styles from './Loading.less'

class Loading extends Component {
  render () {
    return (
      <div className={styles.loadingWarp}>
        <Spin ></Spin>
      </div>
    )
  }
}

export default Loading
