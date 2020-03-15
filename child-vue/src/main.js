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

import a1 from './a1.vue';
import a2 from './a2.vue';

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};


let instance = null, router = null;

function render() {
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

  instance = new Vue({
    router,
    render: createElement => createElement(App),
  }).$mount('#app');
}


if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render();
}

export async function unmount() {
  console.log('[vue]unmount')
  console.log(instance)
  instance.$destroy();
  instance = null;
  router = null;
}
