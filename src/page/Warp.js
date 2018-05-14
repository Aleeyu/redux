import React, { Component } from 'react';
class Warp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '11111111',
    };
  }
    render = ()=> {
      return (
        <div>{this.props.content}</div>
      );
    }
  }
export default Warp;