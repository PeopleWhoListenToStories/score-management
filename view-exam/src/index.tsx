import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';
import './index.css';

import store from './store/index'
import StoreContext from './context/StroeContext'

ReactDOM.render(
<<<<<<< HEAD
  <StoreContext.Provider value={store}>
  <App />
</StoreContext.Provider>,
=======
    <App />,
>>>>>>> e8058cacbee8a90b2bba7579bd043b6b7cf48911
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
