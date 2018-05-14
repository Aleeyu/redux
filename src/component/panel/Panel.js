import React, { Component } from 'react';
import { Card, NavBar, Icon, TabBar } from 'antd-mobile';
import './Panel.css';
import { withRouter } from 'react-router-dom';
@withRouter
export default class TabBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      selectedTab: null,
      hidden: false,
      showNav: false
    };
  }
  componentWillMount(){
    const showNavList =['/', '/activity', '/category', '/shoppingcart', '/me']
    let path = this.props.location.pathname
    let inx = showNavList.indexOf(path);
    if (showNavList.indexOf(path) > -1) {
      var page = ''
        if (inx!==0) {
             page = showNavList[inx].slice(1)
        } else {
             page = 'home'
        }
        this.setState({
            showNav: true,
            selectedTab: page
        })
    } else {
        this.setState({
            showNav: false  
        })
    }
  }
  componentDidMount(){
    // this.setState({
    //     selectedTab: 'Index'
    // })
  }
  render() {
    return (
        <Card className="panel">
            {<NavBar
      mode="light"
    //   style={{opacity: this.props.opacity, display: this.props.display}}
      icon={<Icon type="left" />}
      onLeftClick={() => this.props.history.go(-1)}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>}
    {this.props.children}
    <div className="panel-content">{this.props.content}</div>
    {this.state.showNav ? <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
                <TabBar.Item
            title="Home"
            key="Home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.props.history.push('/')
            }}
          >
          </TabBar.Item>
        <TabBar.Item
            title="Activity"
            key="Activity"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'activity'}
            onPress={() => {
                this.props.history.push('/activity')
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Category"
            key="Category"
            selected={this.state.selectedTab === 'category'}
            onPress={() => {
                this.props.history.push('/category')
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="ShoppingCart"
            key="ShoppingCart"
            selected={this.state.selectedTab === 'shoppingcart'}
            onPress={() => {
                this.props.history.push('/shoppingcart')
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="Me"
            key="Me"
            selected={this.state.selectedTab === 'me'}
            onPress={() => {
                this.props.history.push('/me')
            }}
          >
          </TabBar.Item>
          </TabBar>:null}
    
        </Card>
    );
  }
}
