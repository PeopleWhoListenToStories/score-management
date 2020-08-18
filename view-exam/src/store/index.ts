import Test from "./modules/test"
import Login from './modules/login'
import MainStore from './modules/MainStore'
//试题管理仓库
import AddType from './modules/testManagetion/Addtype'
import AllClasses from './modules/testManagetion/watchQuestion'


import AddUserStore from './modules/userManagetion/addUser'

import ExamManagement from './modules/Exam/exams'

export default {
  Test: new Test(),
  LoginStore: new Login(),
  MainStore: new MainStore(),
  Addtypes: new AddType(),
  AddUserStore: new AddUserStore(),
  AllClass: new AllClasses(),
  ExamManagement: new ExamManagement(),
}