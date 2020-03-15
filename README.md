# micro-frontend-project
> 使用[qiankun](https://qiankun.umijs.org/zh/)（微前端框架）搭建的一个例子。

## 如何跑起来

全都使用yarn

每个应用(master、child-simple、child-react、child-vue)

进入 yarn install

然后 yarn start



## 整体说明

```text
--master        主应用
--child-vue     vue应用
--child-react   react16应用
--child-simple  普通的页面(暂时不能集成进来)
```





## 创建项目遇到的困难

1. 最开始使用的umi3使用qiankun创建，但是始终有问题，估计是umi3对于qiankun还有问题，或则我知识了解不够
2. 子应用的静态资源**一定一定一定**支持跨域请求，否则主应用请求的时候有同源策略被浏览器干掉了。
3. 主应用中的基路由一定要和子应用中的基路由一致。



## 后记

```text
微前端是解构巨石应用而生，主要适合于大型多系统的，多团队的公司。
场景：
	可能有个项目很多的模块，然后可能多个团队来做，这个时候，使用微前端架构。
	解构应用，将可能成巨石应用的拆分了。
	然后团队之间不会区约束技术栈和ui，只需要整体分格差不多就行。统一认证。
	兼容性没有要求，微前端基本都是不支持ie的。
	
微前端的master的开发这，因该是一个对各个系统框架都比较了解的人，不然联调的时候，出现问题，不好解决。

```

