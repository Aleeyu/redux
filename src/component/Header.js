import React, { Component } from 'react';
import {NavBar, Icon} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
@withRouter
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '11111111'
    };
  }
    componentDidMount() {
        // if (!this.props.user) {
        //     // this.props.redirect({redirectTo: ''});
        //      this.props.history.push('/');
        // }
    }
    render = ()=> {
      return (
        <NavBar
      mode="light"
    //   style={{opacity: this.props.opacity, display: this.props.display}}
      icon={<Icon type="left" />}
      onLeftClick={() => this.props.history.go(-1)}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>
      );
    }
  }
export default Header;