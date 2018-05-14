import React, { Component } from 'react';
import { connect } from 'react-redux';
@connect(
  state=>state.user
)
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
    componentDidMount() {
    }
    render = ()=> {
      return (
          <p>test</p>
      );
    }
  }
export default Test;