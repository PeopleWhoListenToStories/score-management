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
        let index: number = 1;
        window.addEventListener('hashchange', (event: HashChangeEvent) => {
          if (routes.findIndex(item => item.path === event.newURL.split('#')[1]) >= 0) {
<<<<<<< HEAD
            return <Route key={item.path} path={item.path} render={(props: any) => {
              return <item.component key={item.path} {...props} routes={item.children} ></item.component>
=======
            return <Route key={item.path} path={item.path} render={(Info: any) => {
              return <item.component key={item.path} {...Info} ></item.component>
>>>>>>> suleiya
            }}>
            </Route>
          } else {
            return <Redirect key={item.path} to='/NoFound'></Redirect>
          }
        })
<<<<<<< HEAD
        return <Route key={item.path} path={item.path} render={(props: any) => {
          return <item.component key={item.path} {...props} routes={item.children}></item.component>
=======
        return <Route key={item.path} path={item.path} render={(Info: any) => {
          if(item.children){
             return <item.component routes={item.children} {...Info} ></item.component>
          }
         return <item.component {...Info}></item.component>
>>>>>>> suleiya
        }}>
        </Route>
      })
    }
    {
      redirectList && redirectList.map(item => {
        return <Redirect key={item.path} to={item.redirect}></Redirect>
      })
    }
  </Switch>
} 