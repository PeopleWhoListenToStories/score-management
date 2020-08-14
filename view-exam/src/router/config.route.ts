import Main from '../view/main/Main'

//试题管理
import AddTest from '../view/main/TestManagement/AddTest'
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
    children:[
      {
        path:'/addtest',
        component:AddTest,
      }
    ]
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