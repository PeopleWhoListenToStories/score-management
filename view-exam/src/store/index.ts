import Test from "./modules/test"
import Login from './modules/login'
import MainStore from './modules/MainStore'
//试题管理仓库
import Addtypes from './modules/testManagetion/Addtype'
import AllClasses from './modules/testManagetion/watchQuestion'


import AddUserStore from './modules/userManagetion/addUser'

export default {
  Test: Test.Test,
  LoginStore: Login.Login,
  MainStore: MainStore.MainStore,
  Addtypes: Addtypes.AddType,
  AddUserStore: AddUserStore.AddUser,
  AllClass:AllClasses.AllClasses
}