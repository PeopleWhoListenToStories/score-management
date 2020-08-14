import Main from '../view/main/Main'

//试题管理

// 错误处理页面
import NoFound from '../view/error/NoFound';
import NoServer from '../view/error/NoServer';


const routes:any = [
  {
    path:'/',
    redirect:'/main'
  },
  {
    path:'/main',
    component:Main,
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