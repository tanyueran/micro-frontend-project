import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const styles = {
  nav: {
    fontSize: '18px',
    border: '1px solid #909090',
    padding: '10px',
    textAlign: 'center'
  }
};


let routes = [
  {
    exact: true,
    path: '/',
    isThis: true,
    component: () => {
      return <div style={{textAlign: 'center'}}><h1>welcome to here</h1></div>
    }
  },
  {
    path: '*',
    isThis: true,
    component: () => {
      return <div style={{textAlign: 'center'}} id={'child-wrapper'}>loading</div>
    }
  }
];

class App extends React.Component {
  render() {
    return (
      <>
        <Suspense fallback={<>loading...</>}>
          <Router>
            <nav style={styles.nav}>
              <Link to={"/"}>首页</Link>
              &nbsp;
              &nbsp;
              &nbsp;
              <Link to={"/vue"}>vue</Link>
              &nbsp;
              &nbsp;
              &nbsp;
              <Link to={"/react"}>react</Link>
              &nbsp;
              &nbsp;
              &nbsp;
              <Link to={"/simple"}>simple</Link>
            </nav>
            <div style={{border: '1px solid #909090', height: '400px'}}>
              <Switch>
                {
                  routes.map((route, i) => <Route exact={route.exact} key={i} path={route.path} render={
                      props => {
                        return <>
                          <route.component {...props} routes={route.children}/>
                          <div id={'child-wrapper'}></div>
                        </>;
                      }
                    }
                    />
                  )
                }
              </Switch>
            </div>
          </Router>
        </Suspense>
      </>
    )
  };
}

export default App;
