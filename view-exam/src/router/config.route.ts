import { IMenuItem, IRouerItem } from "../utils/interface"
import menus from "../router/menu"

//login
import Login from '../view/login/Login'
import ShowApp from '../view/show/Show'

import Main from '../view/main/Main'

// 错误处理页面
import NoFound from '../view/error/NoFound';
import NoServer from '../view/error/NoServer';

import SetUpApp from '../view/other/Setup'

// 获取到重定向数据 默认为数组的第一项
function getFirstRedirect(menus: any[]) {
  return menus[0]?.children[0].path.split('/')[2];
  // return menus[0]?.children[0].path;
}

const routerConfig = {
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/main',
      component: Main,
      children: []
    },

    {
      path: '/setup',
      component: SetUpApp
    },
    {
      path: '/show',
      component: ShowApp
    },
    {
      path: '/NoServer',
      component: NoServer
    },
    {
      path: '/',
      redirect: `/main`
      // redirect: `/main/${getFirstRedirect(menus)}`
    },
    {
      path: '/NoFound',
      component: NoFound
    },
    {
      path: '*',
      component: NoFound
    }
  ]
}
export default routerConfig