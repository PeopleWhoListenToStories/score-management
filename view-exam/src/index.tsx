import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';

import store from './store/index'
import StoreContext from './context/StroeContext'

ReactDOM.render(
  // <React.StrictMode>
  <StoreContext.Provider value={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </StoreContext.Provider>
  // </React.StrictMode>,
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
