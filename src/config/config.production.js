import merge from 'webpack-merge'
import baseConfig from './config.base'

const config = {
  host: 'https://es.zouqugou.com',
  baseUrl: 'https://es.zouqugou.com/api/v1',
  regexps: {
    mallapp: {
      scan: /^https:\/\/es\.zouqugou\.com\/(\??#\/mallapp\/|open\/entry\?redirect=.+)/ig,
      short: /^https:\/\/es\.zouqugou\.com\/open\/entry\/.+/ig,
      interaction: /^http:\/\/zqg-interaction\.oss-cn-beijing\.aliyuncs\.com\/.+/ig,
      link: /https:\/\/es\.zouqugou\.com\/\??#/ig
    }
  }
};

export default merge(baseConfig, config);
