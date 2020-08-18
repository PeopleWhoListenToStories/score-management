import React from 'react';
import { HashRouter } from 'react-router-dom';
import RouterView from './router/RouterView';
import routes from './router/config.route'

import './App.css';


function App() {
  return (
    <div className="App">
      
      <HashRouter>
        <RouterView routes={routes} />
      </HashRouter>
    </div>

  );
}

export default App;

