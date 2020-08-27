import { IMenuItem, IRouerItem } from "../utils/interface"
import menus from "../router/menu"

//login
import Login from '../view/login/Login'
<<<<<<< HEAD
import SetUpApp from '../view/other/Setup'
import ShowApp from '../view/show/Show'
=======
import Show from '../view/own/show'

// import SetUpApp from '../view/other/Setup'
>>>>>>> 8d7236e45c5aae6e68fe7cc4b5d17e5df8dd7d76


import Main from '../view/main/Main'

// 错误处理页面
import NoFound from '../view/error/NoFound';
import NoServer from '../view/error/NoServer';


//方法
import Export from '../view/main/ways/export'

// 格式化nume数据格式
function genterRouter(numes: IMenuItem[]) {
  let routes: IRouerItem[] = [];
  numes.forEach(item => {
    item.children.forEach((value: any) => (value as any).component = value.meta?.component);
    routes = routes.concat(item.children as IRouerItem[])
  })
  return routes;
}

// 获取到重定向数据 默认为数组的第一项
function getFirstRedirect(menus: IMenuItem[]) {
  return menus[0]?.children[0].path.split('/')[2];
  // return menus[0]?.children[0].path;
}

const routes = [
{
  path:'/export',
  component:Export
},
  {
    path: '/main',
    component: Main,
    children: genterRouter(menus)
  },
  {
    path: '/login',
    component: Login
  },
  // {
  //   path: '/setup',
  //   component:SetUpApp
  // },
  {
    path: '/show',
    component:ShowApp
  },
  {
    path: '/NoFound',
    component: NoFound
  },
  {
    path: '/NoServer',
    component: NoServer
  },
  {
    path: '/',
    redirect: `/main/${getFirstRedirect(menus)}`
  },

]
export default routes