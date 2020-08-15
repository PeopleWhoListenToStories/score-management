import Main from '../view/main/Main'

//班级管理
import ClassManage from '../view/main/class/ClassManage'
import RoomManage from '../view/main/class/RoomManage'
import StudentManage from '../view/main/class/StudentManage'

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
    redirect:'/main/classManeage',
    children:[
      {
        path:'/main/classManage',
        component:ClassManage
      },{
        path:'/main/roomManage',
        component:RoomManage
      },{
        path:'/main/studentManage',
        component:StudentManage
      },
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