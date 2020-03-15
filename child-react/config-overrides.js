const {override, fixBabelImports, addLessLoader, addWebpackPlugin} = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const {name} = require('./package.json')

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
    }),
    addWebpackPlugin(new AntdDayjsWebpackPlugin()),
    (config, env) => {
      console.log('env', env);
      config.output.library = `${name}-[name]`;
      config.output.libraryTarget = 'umd';
      config.output.jsonpFunction = `webpackJsonp_${name}`;
      return config;
    }
  ),
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      // Return your customised Webpack Development Server config.
      return config;
    };
  },
};