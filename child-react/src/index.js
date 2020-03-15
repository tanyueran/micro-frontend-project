import './public-path.js'
import React from 'react';
import ReactDOM, {render} from 'react-dom';

import App from './App';

// 渲染函数
function show() {
  render(
    <App/>,
    document.getElementById('react-container')
  );
}

// 非微前端模式的时候自行渲染
if (!window.__POWERED_BY_QIANKUN__) {
  console.log('[react]普通渲染');
  show();
}

/**
 * 应用最开的时候会调用
 * */
export async function bootstrap() {
  console.log('react app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log(props);
  show();
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载子应用的应用实例
 */
export async function unmount() {
  console.log('[react]卸载应用');
  ReactDOM.unmountComponentAtNode(document.getElementById('react-container'));
}

