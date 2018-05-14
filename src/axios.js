import axios from 'axios';
import { Component } from 'react';
import ownconfig from './config/index'
import store from './redux/store';
axios.defaults.withCredentials = true;
axios.defaults.timeout = 15000;
axios.defaults.baseURL = ownconfig.baseUrl;
axios.interceptors.request.use((config) => {
  if (config.data === true || config[0] === true || config._loading === true) {
    config.data = null
  } else if (typeof config.data === 'string') {
    config.headers['Content-Type'] = 'text/plain;charest=UTF-8';
  }
  return config;
}, (error) => {
  console.log('request error: ', error);
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  if (response.data.error == null || !response.data.error) {
    return Promise.resolve(response.data.data);
  } else {

    return Promise.reject(response.data.error);
  }
}, (error) => {
  if (error.code === 'ECONNABORTED') {
    error = new Error('请求超时或者被取消了，请稍候重试。')
    return Promise.reject(error);
  } else if (error.message.indexOf('403') >= 0) {
    // need sign in
    // handleReSignIn();
    //return Promise.reject({err: '403'})
    store.dispatch({type: 'LOGOUT'});
    if(window.location.pathname !== '/login') {
      window.location.href="./login"
    }
  } else {
    return Promise.reject(error);
  }
});
Component.prototype.$http = axios
var $http = axios
export default $http;