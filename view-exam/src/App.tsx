import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import RouterView from './router/RouterView';
import routes from './router/config.route'
import { IRouerItem } from "./utils/interface"
import { useObserver } from 'mobx-react-lite';
import './App.css';

import { ConfigProvider, Radio } from 'antd';


import useStore from './context/useStore'

//引入语言
import { IntlProvider } from 'react-intl';
import zh_CN from "./lang/zh_CN"
import en_US from "./lang/en_US"

const localeMap = {
  'en': en_US,
  'zh': zh_CN,
}

function App() {
  let {Lang} =useStore() 
  console.log((localeMap as any)[Lang.local] )

  return useObserver(() =>  
    <div className="App">

      <span style={{ marginRight: 16 }}>Change locale of components: </span>
      <Radio.Group onChange={(e) => Lang.changeLocals(e.target.value)}>
        <Radio.Button key="en" value='en'>
          English
            </Radio.Button>
        <Radio.Button key="zh" value='zh'>
          中文
            </Radio.Button>
      </Radio.Group>

      {/* <ConfigProvider locale={locale}>
         <HashRouter>
          <RouterView routes={routes as IRouerItem[]} key={locale ? locale.locale : 'en' } />
        </HashRouter>
        </ConfigProvider> */}
      <IntlProvider locale={Lang.local} messages={(localeMap as any)[Lang.local] }>
        <HashRouter>
          <RouterView routes={routes as IRouerItem[]} />
        </HashRouter>
      </IntlProvider >



    </div>
  );
}

export default App;

