import React, { Component } from 'react';
import Panel from '../component/panel/Panel'
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
@connect(
  state=>state.user
)
class Index extends Component {
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
        <div>index<Button type="primary" onClick={()=>{this.props.history.push('/mobile/product')}}>to product</Button></div>
      );
    }
  }
export default Index;