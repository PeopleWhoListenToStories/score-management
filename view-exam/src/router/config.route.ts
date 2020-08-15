import Main from '../view/main/Main'


// 错误处理页面
import NoFound from '../view/error/NoFound';
import NoServer from '../view/error/NoServer';

//main
import addExam from '../view/main/addExam'
import addQuestions from '../view/main/addQuestions'
import editQuestions from '../view/main/editQuestions'
import examDetail from '../view/main/examDetail'
import examEdit from '../view/main/examEdit'
import examList from '../view/main/examList'
import examPaperClassList from '../view/main/examPaperClassList'
import examPaperClassmate from '../view/main/examPaperClassmate'
import examinationPapers from '../view/main/examinationPapers'
import grade from '../view/main/grade'
import menu from '../view/main/menu'
import questionsDetail from '../view/main/questionsDetail'
import questionsType from '../view/main/questionsType'
import room from '../view/main/room'
import showUser from '../view/main/showUser'
import student from '../view/main/student'
import watchQuestions from '../view/main/watchQuestions'
import addUser from '../view/main/addUser'
const routes:any = [
  {
    path:'*',
    redirect:'/main'
  },
  {
    path:'/main',
    component:Main,
    children:[
      {
          path:'/main/addQuestions',
          component:addQuestions,
          name:'添加试题'
      },
      {
        path:'/main/questionsType',
        component:questionsType,
        name:'试题分类'
      },
      {
        path:'/main/watchQuestions',
        component:watchQuestions,
        name:'查看试题'
      },
      {
        path:'/main/addUser',
        component:addUser,
        name:'添加用户'
      },
      {
        path:'/main/showUser',
        component:showUser,
        name:'用户展示'
      },
      {
        path:'/main/addExam',
        component:addExam,
        name:'添加考试'
      },
      {
        path:'/main/menu',
        component:menu,
        name:'添加菜单'
      },
      {
        path:'/main/editQuestions',
        component:editQuestions,
        name:'编辑试题'
      },
      {
        path:'/main/questionsDetail',
        component:questionsDetail,
        name:'试题详情'
      },
      {
        path:'/main/grade',
        component:grade,
        name:'班级管理'
      },
      {
        path:'/main/student',
        component:student,
        name:'学生管理'
      },
      {
        path:'/main/room',
        component:room,
        name:'教室管理'
      },
      {
        path:'/main/examList',
        component:examList,
        name:'试卷列表'
      },
      {
        path:'/main/examEdit',
        component:examEdit,
        name:'创建试卷'
      },
      {
        path:'/main/examDetail',
        component:examDetail,
        name:'试卷详情'
      },
      {
        path:'/main/examinationPapers',
        component:examinationPapers,
        name:'阅卷'
      },
      {
        path:'/main/examPaperClassList',
        component:examPaperClassList,
        name:'批卷班级'
      },
      {
        path:'/main/examPaperClassmate',
        component:examPaperClassmate,
        name:'待批试卷'
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