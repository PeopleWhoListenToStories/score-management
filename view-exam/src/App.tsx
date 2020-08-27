import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import RouterView from './router/RouterView';
import routes from './router/config.route'
import { IRouerItem } from "./utils/interface"
import useStore from './context/useStore'
import './App.css';

// 配置国际化
import { IntlProvider } from 'react-intl'; /* react-intl imports */
// import zh from "react-intl/locale-data/zh";
// import en from "react-intl/locale-data/en";
// addLocaleData([...en, ...zh]);  // 引入多语言环境的数据

import { useObserver } from 'mobx-react-lite';

function App() {
  const { Language } = useStore();
  return useObserver(() => (
    <div className="App">   
      <IntlProvider locale={Language.locale } messages={Language.defaultLanguage} >
        <HashRouter>
          <RouterView routes={routes as IRouerItem[]} />
        </HashRouter>
      </IntlProvider>
    </div>)
  );
}

export default App;

