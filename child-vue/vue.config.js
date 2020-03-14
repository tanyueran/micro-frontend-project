/**
 * @author tanxin
 * @date $
 * @Description vue项目的配置
 */
const path = require('path');
const {name} = require('./package');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  // publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  productionSourceMap: true,

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/style/variable.scss";`,
      }
    }
  },

  // 开发的代理
  devServer: {
    disableHostCheck: true,
    port: '3002',
    hot: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api': { //替换代理地址名称
        target: 'http://localhost:3002/',
        changeOrigin: true, //可否跨域
        pathRewrite: {
          '^/api': '/services', //重写接口
        },
      },
    },
  },

  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
