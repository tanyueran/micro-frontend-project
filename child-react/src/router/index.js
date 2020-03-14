/**
 * @author tanxin
 * @date $
 * @Description: 路由配置信息
 */
import React from 'react';

export default [
  {
    path: '/',
    exact: true,
    component: () => {
      return <div>react首页</div>
    },
  },
  {
    path: '/page1',
    exact: true,
    component: () => {
      return <div>page1</div>
    },
  },
]
