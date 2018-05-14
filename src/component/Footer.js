import React, { Component } from 'react';
import {Icon, TabBar } from 'antd-mobile';
import './footer.css';
import { withRouter } from 'react-router-dom';
import store from '../redux/store'
import browserCookie from 'browser-cookies'
import { connect } from 'react-redux';
@connect(
  state=>state.menu
)
@withRouter
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
      }
      componentWillMount(){
        const showNavList =['/mobile/index', '/mobile/activity', '/mobile/category', '/mobile/shoppingcart', '/mobile/me']
        let path = this.props.location.pathname
        let inx = showNavList.indexOf(path);
        if (showNavList.indexOf(path) > -1) {
           store.dispatch({type: 'SHOWMENU', selectedTab: path})
        } else {
            store.dispatch({type: 'HIDEMENU'})
        }
      }
    componentDidMount() {

    }
    render = ()=> {
    var show = this.props
    console.log(show)
      return (
          <div className="footer">
        {this.props.showmenu ? <TabBar
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
              selected={this.props.selectedTab === '/mobile/index'}
              onPress={() => {
                store.dispatch({type: 'SHOWMENU', selectedTab: '/mobile/index'})
                this.props.history.push('/mobile/index')
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
              selected={this.props.selectedTab === '/mobile/activity'}
              onPress={() => {
                store.dispatch({type: 'SHOWMENU', selectedTab: '/mobile/activity'})
                  this.props.history.push('/mobile/activity')
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
              selected={this.props.selectedTab === '/mobile/category'}
              onPress={() => {
                store.dispatch({type: 'SHOWMENU', selectedTab: '/mobile/category'})
                  this.props.history.push('/mobile/category')
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
              selected={this.props.selectedTab === '/mobile/shoppingcart'}
              onPress={() => {
                store.dispatch({type: 'SHOWMENU', selectedTab: '/mobile/shoppingcart'})
                  this.props.history.push('/mobile/shoppingcart')
              }}
            >
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              title="Me"
              key="Me"
              selected={this.props.selectedTab === '/mobile/me'}
              onPress={() => {
                store.dispatch({type: 'SHOWMENU', selectedTab: '/mobile/me'})
                  this.props.history.push('/mobile/me')
              }}
            >
            </TabBar.Item>
            </TabBar>:null}
            </div>
      );
    }
  }
export default Footer;