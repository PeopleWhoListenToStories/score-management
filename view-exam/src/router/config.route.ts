import Main from '../view/main/Main'

// 错误处理页面
import NoFound from '../view/error/NoFound';
import NoServer from '../view/error/NoServer';

//login
import Login from '../view/login/Login'

// 试题管理
import AddQuestionPage from '../view/main/TestManagement/addQuestions';
import QuestionTypePage from '../view/main/TestManagement/questionsType';
import ViewQuestionPage from '../view/main/TestManagement/watchQuestions';
//详情
import Detail from '../view/main/TestManagement/testDetail';
//编辑试题
import EditQuestion from '../view/main/TestManagement/editQuestion' 


//用户管理
import AddTeacher from '../view/main/UserManagement/addTeacher';
import ViewTeacher from '../view/main/UserManagement/viewTeacher';

// 考试管理
import AddExamPage from '../view/main/ExamManagement/addExam';
import UserListPage from '../view/main/ExamManagement/examList';
import EditPage from '../view/main/ExamManagement/edit'
// 班级管理
import GeadePage from '../view/main/ClassManagement/grade'
import RoomPage from '../view/main/ClassManagement/room'
import StudentPage from '../view/main/ClassManagement/student'

// 阅卷管理
import ExamPaperClassListPage from '../view/main/MarkingManagement/examPaperClassList'


const routes: any = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/main',
    component: Main,
    children: [
      {
        path: '/main/detail',
        component: Detail,
        meta: { title: '试题详情' }
      },
      {
        path: '/main/edit',
        component: EditQuestion,
        meta: { title: '编辑试题' }
      },
      {
        path: '/main/addQuestion',
        component: AddQuestionPage,
        meta: { title: '添加试题' }
      },
      {
        path: '/main/questionType',
        component: QuestionTypePage,
        meta: { title: '试题分类' }
      },
      {
        path: '/main/viewQuestionPage',
        component: ViewQuestionPage,
        meta: { title: '查看试题' },
      },
      {
        path: '/main/addTeacher',
        component: AddTeacher,
        meta: { title: '添加用户' }
      }, {
        path: '/main/viewTeacher',
        component: ViewTeacher,
        meta: { title: '用户展示' }
      },
      {
        path: '/main/addexam',
        component: AddExamPage,
        meta: { title: '添加考试' }
      }, {
        path: '/main/examList',
        component: UserListPage,
        meta: { title: '试卷列表' }
      },
      {
        path: '/main/userList',
        component: UserListPage,
        meta: { title: '试卷列表' }
      },
      {
        path: '/main/grade',
        component: GeadePage,
        meta: { title: '班级管理' }
      }, {
        path: '/main/room',
        component: RoomPage,
        meta: { title: '教室管理' }
      }, {
        path: '/main/student',
        component: StudentPage,
        meta: { title: '学生管理' }
      },
      {
        path: '/main/examPaper',
        component: ExamPaperClassListPage,
        meta: { title: '批卷班级' }
      }
    ]
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/NoFound',
    component: NoFound
  },
  {
    path: '/NoServer',
    component: NoServer
  }
]
export default routes