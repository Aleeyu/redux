import merge from 'webpack-merge'
import baseConfig from './config.base'

const config = {
  host: 'https://es.51s.co',
  baseUrl: 'https://es.51s.co/api/v1',
  regexps: {
    mallapp: {
      scan: /^https:\/\/es\.51s\.co\/(\??\/#\/mallapp\/|open\/entry\?redirect=.*)/ig,
      short: /^https:\/\/es\.51s\.co\/open\/entry\/.+/ig,
      interaction: /^http:\/\/erathink-interaction\.oss-cn-beijing\.aliyuncs\.com\/.+/ig,
      link: /https:\/\/es\.51s\.co\/\??#/ig
    }
  },
  wechat: {
    appId: 'wxb9c796bd30f0f732'
  }
};

export default merge(baseConfig, config);
