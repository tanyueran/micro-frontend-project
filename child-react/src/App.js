import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import routes from './router/index.js'

import MLoading from './components/MLoading.js'

function App() {
  return (
    <>
      <Suspense fallback={<MLoading/>}>
        <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
          <nav style={{fontSize: '18px'}}>
            <Link to={'/'}>home</Link>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <Link to={'/page1'}>page1</Link>
          </nav>
          <div style={{border: '1px solid #333', padding: '10px', height: '400px'}}>
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
    </>
  );
}

export default App;
