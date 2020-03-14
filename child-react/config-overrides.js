const {override, fixBabelImports, addLessLoader, addWebpackPlugin, overrideDevServer} = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
);