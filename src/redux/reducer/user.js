import $http from '../../axios';
import { Toast } from 'antd-mobile';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const USER_INFO = 'USER_INFO';
const ERROR_MSG = 'ERROR_MSG';
const LOGOUT = 'LOGOUT';
const initState = {

};

export function user(state=initState, action) {
  switch (action.type) {
    case ERROR_MSG:
      return {...state, isLogin:false,msg: action.msg};
    case USER_INFO:
      return {...state,...action.payload, isLogin: true};
    case LOGIN_SUCCESS:
      return {isLogin: true};
    case LOGOUT:
      return {isLogin: false};
    default:
      return state;
  }
}

function loginSuccess(data) {
  return {type: LOGIN_SUCCESS, payload: data};
}
function logoutSuccess() {
  return {type: LOGOUT};
}
function errMsg(msg) {
    return {type: ERROR_MSG, msg: msg};
}
function userInfo(user) {
  return {type: USER_INFO, payload: user};
}

  export function userinfo() {
    return dispatch=>{
      $http.get('/common/selfDetail').then(res => {
        dispatch(userInfo(res))
      }).catch((err) => {
        Toast.fail(err.message)
        dispatch(errMsg(err.message));
      })
    };
  }
  export function isbindphone() {
    return dispatch=>{
      this.$http.get('/user/getMobile').then((res) => {
        if (res) {
          
        } else {
          
        }
      }).catch((res) => {
        
      })
    };
  }
export function login(j_username,j_passwd) {
  return dispatch=>{
    $http.post('/forumLogin', {j_username,j_passwd}).then(res => {
        dispatch(loginSuccess(res));
      }).catch((err) => {
        Toast.fail(err.message)
        dispatch(errMsg(err.message));
      })
  };
}
export function logout() {
  return dispatch=>{
    $http.post('/logout').then((res) => {
      dispatch(logoutSuccess());
    }).catch((err) => {
      Toast.fail(err.message)
        dispatch(errMsg(err.message));
    })
  };
}