import Main from '../view/main/Main'

// 错误处理页面
import NoFound from '../view/error/NoFound';
import NoServer from '../view/error/NoServer';

//login
import Login from '../view/login/Login'
 
import menu from './menu'

const routes:any = [
  {
    path:'*',
    redirect:'/login'
  },
  {
    path:'/main',
    component:Main,
    children:menu
  },
  {
    path:'/login',
    component:Login,
  },
  {
    path:'/NoFound',
    component:NoFound
  },
  {
    path:'/NoServer',
    component:NoServer
  }
]
export default routes