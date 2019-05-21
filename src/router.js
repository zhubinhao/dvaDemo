import React from 'react';
import { Router,Route, Switch } from 'dva/router';
import {RouteConfig} from './utils/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {RouteConfig.map((router,i)=>(
          <Route
            key={router.path}
            path={router.path}
            component={dynamic({
              app,
              models: ()=>router.model,
              component: () => router.component(),
            })}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
