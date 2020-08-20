import Test from "./modules/test"
import Login from './modules/login'
import MainStore from './modules/MainStore'
//试题管理仓库

import AllClasses from './modules/testManagetion/watchQuestion'


import AddUserStore from './modules/userManagetion/addUser'
// import ViewTeacherStore from './modules/userManagetion/viewTeacher'

import ExamManagement from './modules/Exam/exams'

import Class from './modules/classManage/classmanage'
import Room from './modules/classManage/roommanage'
import Stu from './modules/classManage/studentmanage'

export default {
  Test: new Test(),
  LoginStore: new Login(),
  MainStore: new MainStore(),

  AddUserStore: new AddUserStore(),
  // ViewTeacherStore: new ViewTeacherStore(),
  AllClass: new AllClasses(),
  ExamManagement: new ExamManagement(),
<<<<<<< HEAD
  Class:Class.Class,
  Room:Room.Room,
  Stu:Stu.Stu
=======
  Class: new Class(),
  Room:new Room(),
>>>>>>> 68ae0a1268738766907fe9aa2e6e8b4c4b5c411b
}