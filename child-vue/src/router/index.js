/**
 * @author tanxin
 * @date 2019/10/15
 * @desc 路由文件
 **/
import VueRouter from 'vue-router';

/*
* 解决路由跳转时出现的错误
* */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

export default [
  {
    path: '',
    component: () => import('../pages/login/index.vue'),
    meta: {
      needLogin: false,
      title: '登录',
    }
  },

  /*{
    path: '/',
    redirect: '/home'
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login/index.vue'),
    meta: {
      needLogin: false,
      title: '登录',
    }
  },
  // 主页
  {
    path: '/home',
    component: () => import('../pages/index.vue'),
    children: [
      // 欢迎页
      {
        path: '',
        name: 'home',
        component: () => import('../pages/home/home.vue'),
        meta: {
          title: '首页',
          needLogin: true,
        }
      },
      {
        path: '/home/page1',
        name: 'page1',
        component: () => import('../pages/home/page1/index.vue'),
        meta: {
          title: 'page1',
          needLogin: true,
        }
      },
      {
        path: '/home/page2',
        name: 'page2',
        component: () => import('../pages/home/page2/index.vue'),
        meta: {
          title: 'page2',
          needLogin: true,
        }
      },
      {
        path: '/home/page3',
        name: 'page3',
        component: () => import('../pages/home/page3/index.vue'),
        meta: {
          title: 'page3',
          needLogin: true,
        }
      },
    ]
  },
  //404页面
  {
    path: '/404',
    component: () => import('../pages/notFound.vue'),
    meta: {
      needLogin: false,
      title: '404',
    }
  },
  // 404
  {
    path: '/!*',
    redirect: '/404',
  },*/
]

