import React, { Component } from 'react';
import Panel from '../component/panel/Panel'
import { List, InputItem, Flex, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import { login, userinfo } from '../redux/reducer/user';
@connect(
  state=>state.user,
  {login, userinfo}
)
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      hasErrorCode: false,
      j_username: '',
      j_passwd: ''
    }
  }
  componentWillMount(){
    
  }
    componentDidMount() {

    }
    onErrorClick = () => {
      if (this.state.hasError) {
        Toast.info('Please enter 11 number');
      }
    }
    onChange = (value) => {
      if (value.replace(/\s/g, '').length < 11) {
        this.setState({
          hasError: true,
        });
      } else {
        this.setState({
          hasError: false,
        });
      }
      this.setState({
        j_username: value
      });
    }
    onErrorClickCode = () => {
      if (this.state.hasError) {
        Toast.info('Please enter 6 number');
      }
    }
    onChangeCode = (value) => {
      if (value.replace(/\s/g, '').length < 6) {
        this.setState({
          hasErrorCode: true,
        });
      } else {
        this.setState({
          hasErrorCode: false,
        });
      }
      this.setState({
        j_passwd: value
      });
    }
    send=()=>{
      var url = '/open/loginCode'
      var that = this;
      this.$http.post(url, {
          mobile: this.state.j_username
        }).then(res => {
          Toast.success('验证码发送成功')
          that.customFocusInst.focus()
        }).catch(err => {
          Toast.fail('验证码发送失败')
        })
  }
      login = ()=>{
        if (!this.state.hasError && !this.state.hasErrorCode) {
          console.log('login')
          this.props.login(this.state.j_username,this.state.j_passwd)
        }
    }
    render = ()=> {
      if (this.props.isLogin) {
        this.props.history.push('/mobile/me')
      }
      const { getFieldProps } = this.props.form;
      return (
<div>
        <List>
        <Flex>
      <div style={{flex: 4}}><InputItem
            {...getFieldProps('number')}
            type="number"
            placeholder="input phone"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.j_username}
            maxLength="11"
            clear
          >phone</InputItem></div>
      <div style={{flex: 1}}><Button size={'small'} type="primary" onClick={()=>{this.send()}}>send</Button></div>
    </Flex>
    <InputItem
            {...getFieldProps('number')}
            type="number"
            placeholder="input code"
            maxLength="6"
            error={this.state.hasErrorCode}
            onErrorClick={this.onErrorClickCode}
            onChange={this.onChangeCode}
            value={this.state.j_passwd}
            clear
            ref={el => this.customFocusInst = el}
          >code</InputItem>
          <List.Item>
          <Button size={'small'} type="primary" onClick={()=>{this.login()}}>login</Button>
          </List.Item>
        </List>
      </div>
      );
    }
  }
  const Login = createForm()(LoginForm);
export default Login;