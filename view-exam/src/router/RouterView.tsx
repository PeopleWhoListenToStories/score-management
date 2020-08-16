import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

interface Iprops {
  routes: any[]
}

export default function RouterView({ routes }: Iprops) {

  const componentList = routes.filter(item => item.component);
  const redirectList = routes.filter(item => item.redirect);

  return <Switch>
    {
      componentList && componentList.map(item => {

        if (item.redirect) {
          if (item.redirect === '*') {
            return <Redirect key={item.path} to={item.redirect}></Redirect>
          } else {
            return <Redirect key={item.path} from={item.path} to={item.redirect}></Redirect>
          }
        }

        return <Route key={item.path} path={item.path} render={(props: any) => {
          return <item.component key={item.path} routes={item.children} {...props}
               
          ></item.component>
        }}>
        </Route>
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
    {
      redirectList && redirectList.map(item => {
        return <Redirect key={item.path} to={item.redirect}></Redirect>
      })
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