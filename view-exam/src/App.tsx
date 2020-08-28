import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import RouterView from './router/RouterView';
import { IRouerItem } from "./utils/interface"
import useStore from './context/useStore'
import './App.css';

// 配置国际化
import { IntlProvider } from 'react-intl'; /* react-intl imports */
// import zh from "react-intl/locale-data/zh";
// import en from "react-intl/locale-data/en";
// addLocaleData([...en, ...zh]);  // 引入多语言环境的数据

import { useObserver } from 'mobx-react-lite';

import routerConfig from './router/config.route'

function App() {
  const { Language, MainStore } = useStore();
  useEffect(() => {
    MainStore.getMenuListAction()
  }, [])

  function geneRoutes() {
    (routerConfig.routes[1] as IRouerItem).children = MainStore.routes;
    return routerConfig.routes;
  }

  return useObserver(() => (
    <div className="App">
      <IntlProvider locale={Language.locale} messages={Language.defaultLanguage} >
        <HashRouter>
          {/* <RouterView routes={routes as IRouerItem[]} /> */}
 
          <RouterView routes={geneRoutes()}></RouterView>
        </HashRouter>
      </IntlProvider>
    </div>)
  );
}

export default App;