import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { connect } from 'react-redux';
import { login } from '../redux/reducer/user';
const FormItem = Form.Item;
@connect(
  state=>state.user,
  {login}
)
class SMSCoder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            j_username: '',
            j_passwd: '',
            loading: false
        };
      }
    sendCode = ()=> {
        var url = '/open/loginCode'
        this.$http.post(url, {
            mobile: this.state.j_username
          }).then(res => {
            message.success('验证码发送成功')
          }).catch(err => {
            console.log(err)
            message.error('验证码发送失败')
          }).finally(() => {
          })
    }
    login = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login(this.state.j_username,this.state.j_passwd)
              }
        })
    }
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.login} className="login-form">
          <FormItem>
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone!' }],
            })(
              <Input onChange={v=>this.setState({j_username: v.target.value})} prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="input phone" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('number', {
              rules: [{ required: true, message: 'Please input your code!' }],
            })(
                <Input onChange={v=>this.setState({j_passwd: v.target.value})} prefix={<Icon type="code-o" style={{ color: 'rgba(0,0,0,.25)' }} />} addonAfter={<Button  type="primary" onClick={this.sendCode}>send</Button>} />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </FormItem>
        </Form>
      );
    }
  }
  const WrappedNormalLoginForm = Form.create()(SMSCoder);
export default WrappedNormalLoginForm;