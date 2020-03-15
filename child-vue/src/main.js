import './public-path.js'
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

Vue.use(VueRouter);

// 项目环境
const HOST = process.env.NODE_ENV;

if (HOST === 'product') {
  Vue.config.productionTip = false;
} else {
  console.log(`===${HOST}`);
}

import a1 from './page1.vue';
import a2 from './page2.vue';

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};


let instance = null, router = null;

function render() {
  // 路由
  router = new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '',
    routes: [
      {
        path: '',
        component: a1,
      },
      {
        path: '/a2',
        component: a2,
      }
    ],
  });
  // 实例
  instance = new Vue({
    router,
    render: createElement => createElement(App),
  }).$mount('#app');
}

// 支持普通的方式展示
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * 导出生命周期函数供给主应用调用
 * */
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render();
}

export async function unmount() {
  console.log('[vue]unmount')
  instance.$destroy();
  instance = null;
  router = null;
}
