import React from 'react';

import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/profile/:username',
    component: Profile,
  },
]

const RouteConfig = (route) => {
  return (
    <Route path={route.path} exact={route.exact}>
      <route.component routes={route.routes} />
    </Route>
  )
}

const Main = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <RouteConfig {...route} key={route.path} />
      ))}
    </Switch>
  )
};

export default Main;
