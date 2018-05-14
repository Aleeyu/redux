import React, { Component } from 'react';
import Panel from '../component/panel/Panel'
import { Button } from 'antd-mobile';
import { logout, userinfo } from '../redux/reducer/user';
import browserCookie from 'browser-cookies'
import { connect } from 'react-redux';
@connect(
  state=>state.user,
  {logout, userinfo}
)
class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentWillMount(){
    this.props.userinfo()
  }
    componentDidMount() {
      
    }
    logout = ()=>{
      this.props.logout()
      browserCookie.erase('userid')
    }
    render = ()=> {
      var user = this.props
      return (
        <div>
          <img alt="asda" style={{maxWidth:'100%'}} src={user.avatar}/>
          <p>mobile{user.mobile}</p>
          <Button type="primary" className="login-form-button" onClick={()=>{this.logout()}}>logout</Button>
        </div>
      );
    }
  }
export default Me;