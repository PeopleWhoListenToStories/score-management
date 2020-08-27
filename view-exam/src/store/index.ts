import Test from "./modules/test"
import Login from './modules/login'
import MainStore from './modules/MainStore'
//试题管理仓库

import ClassStore from './modules/testManagetion/watchQuestion'

import AddUserStore from './modules/userManagetion/addUser'

import ExamManagement from './modules/Exam/exams'

import Class from './modules/classManage/classmanage'
import Room from './modules/classManage/roommanage'

import Stu from './modules/classManage/studentmanage'

import Marking from "./modules/MarkingManagement/index"

import Language from './modules/language/index'

export default {
  Test: new Test(),
  LoginStore: new Login(),
  MainStore: new MainStore(),
  AddUserStore: new AddUserStore(),
  AllClass: new ClassStore(),
  ExamManagement: new ExamManagement(),
  Class: new Class(),
  Room:new Room(),
  Marking:new Marking(),
  Stu: new Stu(),
  Language:new Language()
}