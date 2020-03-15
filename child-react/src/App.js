import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './index.less'

const routes = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('./pages/page1.js')),
  },
  {
    exact: true,
    path: '/page2',
    component: lazy(() => import('./pages/page2.js'))
  }
];


function App() {
  return (
    <div className={'a-wrapper'}>
      <Suspense fallback={<div>loading...</div>}>
        <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
          <nav style={{fontSize: '18px'}}>
            <Link to={'/'}>页面1</Link>
            <Link to={'/page2'}>页面2</Link>
          </nav>
          <div style={{padding: '10px', height: '400px'}}>
            <Switch>
              {
                routes.map((route, i) => <Route exact={route.exact} key={i} path={route.path} render={
                    props =>
                      <route.component {...props} routes={route.children}/>}
                  />
                )
              }
            </Switch>
          </div>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
