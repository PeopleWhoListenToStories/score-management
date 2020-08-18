import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import RouterView from './RouterView';
import routes from './config.route'
function Router() {
  return <>
    <HashRouter>
      <RouterView routes={routes} />
    </HashRouter>
  </>
}

export default Router


 

