import merge from 'webpack-merge'
import baseConfig from './config.base'

const config = {
  host: 'http://192.168.1.26',
  baseUrl: 'http://192.168.1.26/vc'
};

export default merge(baseConfig, config);
