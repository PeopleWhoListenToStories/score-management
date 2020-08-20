import { IMenuItem, IRouerItem } from "../utils/interface"
import menus from "../router/menu"

//login
import Login from '../view/login/Login'
import Main from '../view/main/Main'


// 错误处理页面
import NoFound from '../view/error/NoFound';
import NoServer from '../view/error/NoServer';

// 格式化nume数据格式
function genterRouter(numes: IMenuItem[]) {
  let routes: IRouerItem[] = [];
  numes.forEach(item => {
    item.children.forEach(value => (value as any).component = value.meta?.component);
    routes = routes.concat(item.children as IRouerItem[])
  })
  return routes;
}

// 获取到重定向数据 默认为数组的第一项
function getFirstRedirect(menus: IMenuItem[]) {
  return menus[0]?.children[0].path;
}

const routes = [
  {
    path: '/main',
    component: Main,
    children: genterRouter(menus)
  },
  {
    path: '/login',
    component: Login,
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
    // redirect:'/main'
    redirect: getFirstRedirect(menus)
  }
]
export default routes