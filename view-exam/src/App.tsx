import React, { useEffect, Suspense } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import RouterView from './router/RouterView';
import { IRouerItem } from "./utils/interface"
import useStore from './context/useStore'
import styled from 'styled-components'
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
      <Suspense fallback={<LoadingWrapper><div>Loading profile...</div></LoadingWrapper>}>
        <IntlProvider locale={Language.locale} messages={Language.defaultLanguage} >
          <HashRouter>
            {/* <RouterView routes={routes as IRouerItem[]} /> */}

            <RouterView routes={geneRoutes()}></RouterView>
          </HashRouter>
        </IntlProvider>
      </Suspense>
    </div>)
  );
}

export default App;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  background:#fff;
  display: grid;
  margin: auto;
`