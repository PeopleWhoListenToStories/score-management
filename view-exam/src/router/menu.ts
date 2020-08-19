
// 试题管理
import AddQuestionPage from '../view/main/TestManagement/addQuestions';
import QuestionTypePage from '../view/main/TestManagement/questionsType';
import ViewQuestionPage from '../view/main/TestManagement/watchQuestions';

//用户管理
import AddTeacher from '../view/main/UserManagement/addTeacher';
import ViewTeacher from '../view/main/UserManagement/viewTeacher';

// 考试管理
import AddExamPage from '../view/main/ExamManagement/addExam';
import UserListPage from '../view/main/ExamManagement/examList';

// 班级管理
import GeadePage from '../view/main/ClassManagement/grade'
import RoomPage from '../view/main/ClassManagement/room'
import StudentPage from '../view/main/ClassManagement/student'

// 阅卷管理
import ExamPaperClassListPage from '../view/main/MarkingManagement/examPaperClassList'

export default [
  {
    meta: { title: '试题管理' },
    children: [
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
        meta: { title: '查看试题' }
      }
    ]
  },
  {
    meta: { title: '用户管理' },
    children: [
      {
        path: '/main/addTeacher',
        component: AddTeacher,
        meta: { title: '添加用户' }
      }, {
        path: '/main/viewTeacher',
        component: ViewTeacher,
        meta: { title: '用户展示' }
      }
    ]
  },
  {
    meta: { title: '考试管理' },
    children: [{
      path: '/main/addexam',
      component: AddExamPage,
      meta: { title: '添加考试' }
    }, {
      path: '/main/examList',
      component: UserListPage,
      meta: { title: '试卷列表' }
    },
      // {
      //   path: '/main/questionTypePage',
      //   component: QuestionTypePage,
      //   meta: { title: '试卷详情', show: false }
      // }
    ]
  },
  {
    meta: { title: '班级管理' },
    children: [{
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
    }]
  },
  {
    meta: { title: '阅卷管理' },
    children: [{
      path: '/main/examPaper',
      component: ExamPaperClassListPage,
      meta: { title: '批卷班级' }
    }]
  }
]