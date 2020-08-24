import React from 'react';
import { HashRouter } from 'react-router-dom';
import RouterView from './router/RouterView';
import routes from './router/config.route'
import { IRouerItem } from "./utils/interface"
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import './App.css';
function App() {
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <HashRouter>
          <RouterView routes={routes as IRouerItem[]} />
        </HashRouter>
      </ConfigProvider>
    </div>
  );
}

export default App;

