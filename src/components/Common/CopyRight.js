import React, { Component, Fragment } from 'react'
import styles from './CopyRight.less'

class CopyRight extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.links}>
          <a href="">帮助</a>
          <a href="">关于</a>
          <a href="">条款</a>
        </div>
        <div className={styles.copy}>Copyright ©2018 Created by Qhx0807</div>
      </Fragment>
    )
  }
}

export default CopyRight
