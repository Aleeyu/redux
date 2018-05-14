import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
@withRouter
class AuthRoute extends Component{
    componentDidMount() {
        //获取用户信息做跳转
        // 是否登录，用户类型，当前的url，用户是否完善信息
        // this.$http.get('/common/selfDetail').then(res => {
        //     console.log(res)
        //   }).finally((err) => {
        //       console.log(err)
        //       this.props.history.push('/')
        //   })
    }
    render(){
        return null
    }
}

export default AuthRoute;