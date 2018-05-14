import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Login from './login';
import Index from './index';
import Me from './me';
import Test from './Test';
import Product from './Product'
import Activity from './Activity'
import ShoppingCart from './ShoppingCart'
import Category from './Category'
import PageNotFound from '../component/404';
import Detail from './Detail'
import store from '../redux/store'
class Mobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '11111111'
    };
  }
  componentWillMount() {
    console.log(1)
  }
    componentDidMount() {
        // if (!this.props.user) {
        //     // this.props.redirect({redirectTo: ''});
        //      this.props.history.push('/');
        // }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.location.pathname)    // path/to/abc
        const showNavList =['/mobile/index', '/mobile/activity', '/mobile/category', '/mobile/shoppingcart', '/mobile/me']
        let path = nextProps.location.pathname
        let inx = showNavList.indexOf(path);
        if (showNavList.indexOf(path) > -1) {
           store.dispatch({type: 'SHOWMENU', selectedTab: path})
        } else {
            store.dispatch({type: 'HIDEMENU'})
        }
    }
    render = ()=> {
      return (
          <div>
              <Header/>
              <Switch>
                <Route exact path="/mobile/index" component={Index} />
                <Route exact path="/mobile/test" component={Test} />
                <Route exact path="/mobile/activity" component={Activity} />
                <Route exact path="/mobile/detail/:id" component={Detail} />
                <Route exact path="/mobile/category" component={Category} />
                <Route exact path="/mobile/shoppingcart" component={ShoppingCart} />
                <Route exact path="/mobile/login" component={Login} />
                <Route exact path="/mobile/product" component={Product} />
                <Route exact path="/mobile/me" component={Me} />
                </Switch>
              <Footer/>
          </div>
      );
    }
  }
export default Mobile;