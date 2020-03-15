import React from 'react';
import ReactDOM from 'react-dom';
import {registerMicroApps, start} from 'qiankun';
import App from './pages/App';
import './index.less'

// 定义渲染函数
// @params:appContent  请求到的html字符串
// @params:loading 是否正在加载
function render({appContent, loading}) {
  // 默认的子应用容器
  const container = document.getElementById('child-wrapper');
  ReactDOM.render(<div className={'html-wrapper'} dangerouslySetInnerHTML={{__html: appContent}}></div>, container);
}

// 判断是否加载子应用，此处是使用history路由的方式，如果使用hash则改变此处方法即可
function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

// 注册子应用，可以通过接口请求过来。
registerMicroApps([
  {name: 'vue-app', entry: '//localhost:3001/vue', render, activeRule: genActiveRule('/vue')},
  {name: 'react-app', entry: '//localhost:3003/react', render, activeRule: genActiveRule('/react')},
]);

// 主应用渲染
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


// 启动微前端
start({
  jsSandbox: true, // 开启js沙箱。
  prefetch: true, // 开启预加载
});
