import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import { IRouerItem } from "../utils/interface"
import { getCookie } from "../utils/myCookie"

interface Iprops {
  routes: IRouerItem[]
}

// 登录白名单
const whileList = ['/login', '/main', '/NoFound', 'NoServer']

export default function RouterView({ routes }: Iprops) {
  const history = useHistory();
  return <Switch>
    {
      routes && routes.map(item => {
        // 页面重定向
        if (item.redirect) {
          return <Redirect key={item.path} from={item.path} to={item.redirect}></Redirect>
        }
        //   // if (item.path === '/') {
        //   //   return <Redirect key={item.path} from={item.path} to="/main"></Redirect>
        //   // } else {
        //   //   return <Redirect key={item.path} from={item.path} to={item.redirect}></Redirect>
        //   // }
        // }

        return <Route key={item.path} path={item.path} render={(props) => {

          // 获取不到用户信息就去登录页面
          if (!getCookie('user_id')) {
            console.warn( '获取不到用户信息' )
          }

          // 用户登录拦截
          let isPath = props.match.path;
          if (!whileList.includes(isPath) && !getCookie('token')) {
            props.history.replace(`/login?redirect=${encodeURIComponent(isPath)}`);
          }
          if (item.children) {
            return <item.component {...props} routes={item.children} meta={item.meta}></item.component>
          } else {
            return <item.component {...props} meta={item.meta}></item.component>
          }
        }}></Route>
      })
      // .concat(routes.map((item: any) => {
      //   return <Redirect key={item.path} exact from={item.path} to="/403" />
      // }))
      //.concat(
      //   routes.length ? <Redirect key="404" to="/NoFound" /> : <React.Fragment key="404"></React.Fragment>
      // )
      // window.addEventListener('hashchange', (event: HashChangeEvent) => {
      //   changeRoute(routes,  event.newURL.split('#')[1])
      // })
    }

  </Switch>
}

// function changeRoute(arr: any[], val: string) {
//   console.log(arr, val, '=========')
//   if (arr.find(item => item.path === val)) {
//     return <Redirect to={val}></Redirect>
//   } else {
//     return <Redirect to='/NoFound' ></Redirect>
//   }
// }