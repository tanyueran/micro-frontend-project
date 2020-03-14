import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';
import store from './store/index.js'

import './style/index.less'

// 禁止react development tools
if (process.env.NODE_ENV === 'development') {
  try {
    let funcList = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    for (let f in funcList) {
      if (typeof funcList[f] == 'function') {
        funcList[f] = function () {
        }
      }
    }
  } catch (e) {
  }
}

function show() {
  render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  show();
}


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
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}