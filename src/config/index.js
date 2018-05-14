const config = {
  // host: 'https://esdev.51s.co',
  // baseUrl: 'https://esdev.51s.co/api/v1',
  host: 'https://es.zouqugou.com',
  baseUrl: 'https://es.zouqugou.com/api/v1',
  // host: 'http://192.168.1.109:8080',
  // baseUrl: 'http://192.168.1.109:8080/api/v1',
  regexps: {
    mallapp: {
      scan: /^https:\/\/esdev\.51s\.co\/(\??#\/mallapp\/|open\/entry\?redirect=.+)/ig,
      short: /^https:\/\/esdev\.51s\.co\/open\/entry\/.+/ig,
      interaction: /^http:\/\/erathink-interaction\.oss-cn-beijing\.aliyuncs\.com\/.+/ig,
      link: /https:\/\/esdev\.51s\.co\/\??#/ig
    }
  },
  wechat: {
    appId: 'wxaabcaab73e9592f6'
  }
};

export default config;