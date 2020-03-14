import './public-path.js'
import Vue from 'vue'
import VueRouter from 'vue-router';
import store from './store/index.js'
import routes from './router/index.js'
import App from './App.vue'
import './plugins/element.js'
import api from './api/index.js'
import filters from './common/filters/index.js'
import axios from './common/utils/axios.js'

Vue.use(VueRouter);

import './style/index.scss'

// 项目环境
const HOST = process.env.NODE_ENV;

// 引入开发的模拟数据
if (HOST === 'development') {
  require('./dev/mock/index.js');
}
if (HOST === 'product') {
  Vue.config.productionTip = false;
} else {
  console.log(`===${HOST}`);
}

// 请求地址
Vue.prototype.$api = api;
// xhr库
Vue.prototype.$axios = axios;

// 全局过滤器
for (const val in filters) {
  Vue.filter(val, filters[val]);
}
// 状态初始化
store.commit('init');

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
  console.log('====router')
  console.log(router)
  router.beforeEach((to, from, next) => {
    console.log('before')
    console.log(to)
    next();
  })
  router.afterEach((to, from) => {
    console.log('after')
    console.log(to)
  })

  instance = new Vue({
    router,
    store,
    render: createElement => createElement(App),
    mounted() {
      console.log('----vue挂载ok')
      this.$nextTick(() => {
        console.log(instance);
      });
    }
  }).$mount('#app');
  console.log("vue 开始渲染了");
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
