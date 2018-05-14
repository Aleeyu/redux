import React, { Component } from 'react';
import Panel from '../component/panel/Panel'
import { connect } from 'react-redux';
@connect(
  state=>state.user
)
class Category extends Component {
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
        <div>Category</div>
      );
    }
  }
export default Category;