import React from 'react';
import { HashRouter } from 'react-router-dom';
import RouterView from './router/RouterView';
import routes from './router/config.route'
import { IRouerItem } from "./utils/interface"
import './App.css';
// import { ConfigProvider,Radio } from 'antd';


// import enUS from 'antd/es/locale/en_US';
// import zhCN from 'antd/es/locale/zh_CN';
function App() {
  // let [locale,setLocale]=useState()
  // const changeLocale = (e:any) => {
  //   const localeValue = e.target.value;
  //   setLocale(localeValue)
  
  // };
  return (
    <div className="App">
      {/* <div>
        <div className="change-locale">
          <span style={{ marginRight: 16 }}>Change locale of components: </span>
          <Radio.Group value={locale} onChange={changeLocale}>
            <Radio.Button key="en" value={enUS}>
              English
            </Radio.Button>
            <Radio.Button key="cn" value={zhCN}>
              中文
            </Radio.Button>
          </Radio.Group>
        </div>
        <ConfigProvider locale={locale}>
         <HashRouter>
          <RouterView routes={routes as IRouerItem[]} />
        </HashRouter>
        </ConfigProvider>

        
      </div> */}
      <HashRouter>
          <RouterView routes={routes as IRouerItem[]} />
        </HashRouter>
        
     
    </div>
  );
}

export default App;

