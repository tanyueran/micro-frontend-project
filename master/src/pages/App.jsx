import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.less'
import {lazy} from 'react'

// 基本的路由
let routes = [
  // 首页
  {
    exact: true,
    path: '/',
    component: lazy(() => import('./home.js')),
  },
  {
    exact: true,
    path: '/info',
    component: lazy(() => import('./info.js')),
  },
];

class App extends React.Component {
  render() {
    return (
      <>
        <Suspense fallback={null}>
          <Router>
            <div className={'app-wrapper'}>
              <nav className={"nav"}>
                <Link to={"/"}>首页</Link>
                <Link to={"/vue"}>vue</Link>
                <Link to={"/react"}>react</Link>
                <Link to={"/info"}>信息</Link>
              </nav>
              <div className={'container'}>
                <div id={'child-wrapper'}>
                  <Switch>
                    {
                      routes.map((route, i) =>
                        <Route exact={route.exact} key={i} path={route.path} render={
                          props => {
                            return <>
                              <route.component {...props} routes={route.children}/>
                            </>;
                          }
                        }
                        />
                      )
                    }
                  </Switch>
                </div>
              </div>
            </div>
          </Router>
        </Suspense>
      </>
    )
  };
}

export default App;
