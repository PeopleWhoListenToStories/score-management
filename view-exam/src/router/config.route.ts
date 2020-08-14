import Main from '../view/main/Main'


// 错误处理页面
import NoFound from '../view/error/NoFound';
import NoServer from '../view/error/NoServer';

//main
import addExam from '../view/main/addExam'
import addQuestions from '../view/main/TestManagement/addQuestions'
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
import questionsType from '../view/main/TestManagement/questionsType'
import room from '../view/main/room'
import showUser from '../view/main/showUser'
import student from '../view/main/student'
import watchQuestions from '../view/main/TestManagement/watchQuestions'
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
          path:'/addQuestions',
          component:addQuestions,
          name:'添加试题'
      },
      {
        path:'/main/questionsType',
        component:questionsType,
        name:'试题分类'
      },
      {
        path:'/watchQuestions',
        component:watchQuestions,
        name:'查看试题'
      },
      {
        path:'/addUser',
        component:addUser,
        name:'添加用户'
      },
      {
        path:'/showUser',
        component:showUser,
        name:'用户展示'
      },
      {
        path:'/addExam',
        component:addExam,
        name:'添加考试'
      },
      {
        path:'/menu',
        component:menu,
        name:'添加菜单'
      },
      {
        path:'/editQuestions',
        component:editQuestions,
        name:'编辑试题'
      },
      {
        path:'/questionsDetail',
        component:questionsDetail,
        name:'试题详情'
      },
      {
        path:'/grade',
        component:grade,
        name:'班级管理'
      },
      {
        path:'/student',
        component:student,
        name:'学生管理'
      },
      {
        path:'/room',
        component:room,
        name:'教室管理'
      },
      {
        path:'/examList',
        component:examList,
        name:'试卷列表'
      },
      {
        path:'/examEdit',
        component:examEdit,
        name:'创建试卷'
      },
      {
        path:'/examDetail',
        component:examDetail,
        name:'试卷详情'
      },
      {
        path:'/examinationPapers',
        component:examinationPapers,
        name:'阅卷'
      },
      {
        path:'/examPaperClassList',
        component:examPaperClassList,
        name:'批卷班级'
      },
      {
        path:'/examPaperClassmate',
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