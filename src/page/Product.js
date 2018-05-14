import React, { Component } from 'react';
import Panel from '../component/panel/Panel'
import { connect } from 'react-redux';
import { Icon, Button, Toast } from 'antd-mobile';
import './Product.css';
@connect(
  state=>state.user
)
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      showup: false,
      list: [],
      page: 1,
      size: 10,
      last: false,
      busy: false,
      rerfesh: false,
      isend: false,
      storeObject:{}
    };
  }
    componentWillMount(){
        this.query()
    }
    componentDidMount() {

    }
    queryByPage= ()=> {
        this.setState({
            page: this.state.page += 1
        })
        this.query()
      }
    query= ()=> {
        this.setState({
            busy: true
        })
        let o = {
          page: this.state.page,
          size: this.state.size,
          orderBy: [],
          queryFilter: [{property: 'isOnShelf', op: '=', value: 0}],
          _loading: true
        }

        this.$http.post('/open/market/goods/search', o).then(res => {
            if (this.state.page <= 1) {
                this.state.list = []
                this.state.storeObject = {}
              }
              if (this.state.page >= res.totalPages || (this.state.page === 1 && res.content.length === 0)) {
                this.setState({
                    last: true
                })
              }
            this.setState({list : this.state.list.concat(res.content)})
        }).catch(res => {
            Toast.fail(res.message, 1);
        }).finally(() => {
            this.setState({
                busy: false
            })
            this.setState({
                rerfesh: false
            })
        })
      }
   handleScroll=(event)=> {
//     var op = 1-event.target.scrollTop / 1000
//    if (op>=1) {
//        op=1
//    } else if (op<=0) {
//        op=0
//    }
//    this.setState({
//        opacity: op
//    })
if (event.target.scrollTop<0){
    this.setState({
        showup: true,
        num: -event.target.scrollTop * 5
    })
    if (this.state.isend) {
        this.setState({
            showup: false
        })
    }
}
if (event.target.scrollTop<-50 && this.state.isend) {
    this.setState({
        rerfesh: true,
        page: 1
    })
    this.query()
}
   // console.log(event.target.offsetHeight)
   // console.log(event.target.children[0].offsetHeight)
   // console.log(event.target.children[0].offsetHeight - event.target.scrollTop)
    if (event.target.children[0].offsetHeight - event.target.scrollTop <= event.target.offsetHeight+10) {
        if (!this.state.busy) {
            this.queryByPage()
        }
    }
}
end=()=>{
    this.setState({
        isend: true
    })
}
start=()=>{
    this.setState({
        isend: false
    })
}
detail=(d)=>{
    this.props.history.push(`./detail/${d.id}`)
}
render = ()=> {
    var loadState = ()=>{
    if (this.state.last) {
    return <Button icon="check-circle-o">没有更多了</Button>
    } else {
    if (this.state.busy) {
     return <Button loading>loading...</Button>
    } else if (!this.state.busy) {
     return null
    }
    }
    }
      return (
        <div onTouchStart={this.start} onTouchEnd={this.end} onScroll={this.handleScroll} style={{height:'100vh',overflowY:'scroll'}}>
          <div ref="list" style={{paddingBottom: '40px'}}>
          {this.state.showup ? <p style={{textAlign:'center'}}><Icon type="up" style={{transform:`rotate(${this.state.num}deg) scale(${this.state.num/100})`, margin: '0 auto'}}></Icon></p> : null}
          {this.state.rerfesh ? <Button loading>loading...</Button> : null}
              {
          this.state.list.map((i)=> {
            return (
                <div onClick={()=>{this.detail(i)}} key={i.id} style={{ padding: '0 15px' ,borderBottom:'1px dotted #eee'}}>
          <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18
            }}
          >{i.goodsName}</div>
          <div style={{display: 'flex', padding: '15px 0' }}>
            <img style={{ height: '64px', marginRight: '15px' }} src={JSON.parse(i.imgs)[0]} alt="" />
            <div style={{ lineHeight: 1 }}>
              <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{i.skuDetails[0].salesPrice / 100}</span>¥</div>
            </div>
          </div>
        </div>
            )
          }
        )
              }
              {loadState()}
          </div>
      )
        </div>
      );
    }
  }
export default Product;