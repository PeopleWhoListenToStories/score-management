import { IMenuItem } from "../utils/interface"

// 试题管理
import AddQuestionPage from '../view/main/TestManagement/addQuestions';
import QuestionTypePage from '../view/main/TestManagement/questionsType';
import WatchQuestionPage from '../view/main/TestManagement/watchQuestions';
import DetailPage from "../view/main/TestManagement/testDetail"
import EditQuestionPage from "../view/main/TestManagement/editQuestion"

//用户管理
import AddTeacher from '../view/main/UserManagement/addTeacher';
import ViewTeacher from '../view/main/UserManagement/viewTeacher';

// 考试管理
import AddExamPage from '../view/main/ExamManagement/addExam';
import UserListPage from '../view/main/ExamManagement/examList';
import ConditionPage from '../view/main/ExamManagement/condition'//条件获取的
import EditPage from '../view/main/ExamManagement/edits'
// 班级管理
import GeadePage from '../view/main/ClassManagement/grade'
import RoomPage from '../view/main/ClassManagement/room'
import StudentPage from '../view/main/ClassManagement/student'

// 阅卷管理
import ExamPaperClassListPage from '../view/main/MarkingManagement/examPaperClassList'

const menus: IMenuItem[] = [
  {
    name: '试题管理',
    meta: {
      icon: '',
      name: '试题管理',
      show: true
    },
    children: [
      {
        path: '/main/addQuestion',
        meta: {
          component: AddQuestionPage,
          name: '添加试题',
          show: true
        }
      },
      {
        path: '/main/questionType',
        meta: {
          component: QuestionTypePage,
          name: '试题分类',
          show: true
        }
      },
      {
        path: '/main/watchQuestions',
        meta: {
          component: WatchQuestionPage,
          name: '试题详情',
          show: true
        }
      },
      {
        path: '/main/detail',
        meta: {
          component: DetailPage,
          name: '详情',
          show: false
        }
      },
      {
        path: '/main/editQuestion',
        meta: {
          component: EditQuestionPage,
          name: '编辑',
          show: false
        }
      }
    ]
  },
  {
    name: '用户管理',
    meta: {
      icon: '',
      name: '',
      show: true
    },
    children: [
      {
        path: '/main/addTeacher',
        meta: {
          component: AddTeacher,
          name: '添加用户',
          show: true
        }
      },
      {
        path: '/main/viewTeacher',
        meta: {
          component: ViewTeacher,
          name: '用户展示',
          show: true
        }
      }
    ]
  },
  {
    name: '考试管理',
    meta: {
      icon: '',
      name: '',
      show: true
    },
    children: [
      {
        path: '/main/addExam',
        meta: {
          component: AddExamPage,
          name: '添加考试',
          show: true
        }
      },
      {
        path: '/main/userList',
        meta: {
          component: UserListPage,
          name: '试卷列表',
          show: true
        }
      },
      {
        path: '/main/edit',
        meta: {
          component: EditPage,
          name: '编辑页面',
          show: false
        }
      },
      {
        path: '/main/condition',
        meta: {
          component: ConditionPage,
          name: '条件',
          show: false
        }
      }
    ]
  },
  {
    name: '班级管理',
    meta: {
      icon: '',
      name: '班级管理',
      show: true
    },
    children: [
      {
        path: '/main/grade',
        meta: {
          component: GeadePage,
          name: '教室管理',
          show: true
        }
      },
      {
        path: '/main/room',
        meta: {
          component: RoomPage,
          name: '班级管理',
          show: true
        }
      },
      {
        path: '/main/student',
        meta: {
          component: StudentPage,
          name: '学生管理',
          show: true
        }
      }
    ]
  },
  {
    name: '阅卷管理',
    meta: {
      icon: '',
      name: '阅卷管理',
      show: true
    },
    children: [
      {
        path: '/main/examPaperClassList',
        meta: {
          component: ExamPaperClassListPage,
          name: '待批班级',
          show: true
        }
      }
    ]
  }

]



export default menus