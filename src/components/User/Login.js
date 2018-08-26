import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import styles from './Login.less'
import logo from '../../assets/logo.svg'
const FormItem = Form.Item

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  render () {
    const { getFieldDecorator } = this.props.form
    const rules = {
      userName: [{ required: true, message: '请输入用户名' }],
      password: [{ required: true, message: '请输入密码' }]
    }
    return (
      <div className={styles.login}>
        <div className={styles.loginTop}>
          <div className={styles.topHeader}>
            <a href="#/">
              <img src={logo} alt="" />
              <span>Ant Design</span>
            </a>
          </div>
          <div className={styles.topDesc}>Ant Design 是西湖区最具影响力的 Web 设计规范</div>
        </div>
        <Form onSubmit={this.handleSubmit} className={styles.loginForm} autocomplete="off">
          <FormItem>
            {
              getFieldDecorator('userName', { rules: rules.userName })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />)
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('password', { rules: rules.password })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码" />)
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('remember', { valuePropName: 'checked', initialValue: true })(
                <Checkbox>记住账号</Checkbox>)
            }
            <a className={styles.loginFormForgot} href="">忘记密码</a>
            <Button type="primary" loading={this.state.loading} htmlType="submit" className={styles.loginFormButton}>登录</Button>
            <a href="" className={styles.loginFormReg}>注册账号</a>
          </FormItem>
        </Form>
      </div>  
    )
  }
  componentDidMount () {
    // console.log(styles)
    // this.props.form.validateFields()
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ loading: true })
        setTimeout(() => {
          this.setState({ loading: false })
          this.props.history.push('/home')
        }, 1000)
      }
    })
  }
}

export default Form.create()(Login)
