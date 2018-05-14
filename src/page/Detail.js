import React, { Component } from 'react';
import Panel from '../component/panel/Panel'
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
@connect(
  state=>state.user
)
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: null
    };
  }
  componentWillMount() {
    
}
    componentDidMount() {
        this.query()
    }
    query=()=>{
          this.$http.get(`/open/market/goods/${this.props.match.params.id}`).then(res => {
            this.setState({
                detail: res.goods,
                img: JSON.parse(res.goods.imgs)[0]
            })
          }).catch((err) => {
            Toast.fail(err.message)
          })
        }
    render = ()=> {
      return (
        <div>
              {
                  this.state.detail &&
                  <p>{this.state.detail.goodsName}<img alt="as" src={this.state.img} style={{maxWidth: '100%'}}/></p>
              }
          </div>
      );
    }
  }
export default Detail;