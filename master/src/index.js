import React from 'react';
import {registerMicroApps, start} from 'qiankun';
import ReactDOM from 'react-dom';
import App from './pages/App';
import './index.css'

// 定义渲染函数
// @params:appContent  请求到的html字符串
// @params:loading 是否正在加载
function render({appContent, loading}) {
  const container = document.getElementById('child-wrapper');
  ReactDOM.render(<div
    dangerouslySetInnerHTML={{__html: appContent}}></div>, container);
}

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

registerMicroApps([
  {name: 'vue-app', entry: '//localhost:3001/vue', render, activeRule: genActiveRule('/vue')},
  {name: 'putong-app', entry: '//localhost:3002', render, activeRule: genActiveRule('/simple')},
  {name: 'react-app', entry: '//localhost:3003/react', render, activeRule: genActiveRule('/react')},
]);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


// 启动
start({
  jsSandbox: true,
  prefetch: true,
});
