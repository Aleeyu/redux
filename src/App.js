import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './routes';
import 'antd-mobile/dist/antd-mobile.css'
import './App.css';

class App extends Component {
  componentWillMount() {
    console.log(1)
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        {Routes}
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
