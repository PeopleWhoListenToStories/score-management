import { IMenuItem } from "../utils/interface"
import { AppstoreOutlined, UserOutlined, ScheduleOutlined, TableOutlined, MergeCellsOutlined } from '@ant-design/icons';

// 试题管理
import AddQuestionPage from '../view/main/TestManagement/addQuestions';
import QuestionTypePage from '../view/main/TestManagement/questionsType';
import WatchQuestionPage from '../view/main/TestManagement/watchQuestions';
import DetailPage from "../view/main/TestManagement/testDetail"
import EditQuestionPage from "../view/main/TestManagement/editQuestion"

// 用户管理
import AddTeacher from '../view/main/UserManagement/addTeacher';
import ViewTeacher from '../view/main/UserManagement/viewTeacher';

// 考试管理
import AddExamPage from '../view/main/ExamManagement/addExam';
import UserListPage from '../view/main/ExamManagement/examList';
import EditPage from "../view/main/ExamManagement/edits";
import ConditionPage from "../view/main/ExamManagement/condition"

// 班级管理
import GeadePage from '../view/main/ClassManagement/grade'
import RoomPage from '../view/main/ClassManagement/room'
import StudentPage from '../view/main/ClassManagement/student'

// 阅卷管理
import ExamPaperClassListPage from '../view/main/MarkingManagement/examPaperClassList'
import ClassMate from "../view/main/MarkingManagement/classmate"


const menus: IMenuItem[] = [
 
  {
    name: 'menus.question',
    meta: {
      icon: AppstoreOutlined,
      name: 'menus.question',
      show: true
    },
    children: [
     
      {
        path: '/main/addQuestion',
        // redirect: '/main/addQuestion',
        meta: {
          component: AddQuestionPage,
          name: 'menus.question.addQuestion',
          show: true
        }
      },
      {
        path: '/main/questionType',
        meta: {
          component: QuestionTypePage,
          name: 'menus.question.questionType',
          show: true
        }
      },
      {
        path: '/main/watchQuestions',
        meta: {
          component: WatchQuestionPage,
          name: 'menus.question.watchQuestions',
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
    name: 'menus.user',
    meta: {
      icon: UserOutlined,
      name: 'menus.user',
      show: true
    },
    children: [
      {
        path: '/main/addTeacher',
        meta: {
          component: AddTeacher,
          name: 'menus.user.AddTeacher',
          show: true
        }
      },
      {
        path: '/main/viewTeacher',
        meta: {
          component: ViewTeacher,
          name: 'menus.user.ViewTeacher',
          show: true
        }
      }
    ]
  },
  {
    name: 'menus.exam',
    meta: {
      icon: ScheduleOutlined,
      name: 'menus.exam',
      show: true
    },
    children: [
      {
        path: '/main/addExam',
        meta: {
          component: AddExamPage,
          name: 'menus.exam.AddExamPage',
          show: true
        }
      },
      {
        path: '/main/userList',
        meta: {
          component: UserListPage,
          name: 'menus.exam.UserListPage',
          show: true
        }
      },
      {
        path: '/main/edits',
        meta: {
          component: EditPage,
          name: 'menus.exam.EditPage',
          show: false
        }
      },
      {
        path: '/main/condition',
        meta: {
          component: ConditionPage,
          name: 'menus.exam.ConditionPage',
          show: false
        }
      }
    ]
  },
  {
    name: 'menus.class',
    meta: {
      icon: TableOutlined,
      name: 'menus.class',
      show: true
    },
    children: [
      {
        path: '/main/grade',
        meta: {
          component: GeadePage,
          name: 'menus.class.GeadePage',
          show: true
        }
      },
      {
        path: '/main/room',
        meta: {
          component: RoomPage,
          name: 'menus.class.RoomPage',
          show: true
        }
      },
      {
        path: '/main/student',
        meta: {
          component: StudentPage,
          name: 'menus.class.StudentPage',
          show: true
        }
      }
    ]
  },
  {
    name: 'menus.merge',
    meta: {
      icon: MergeCellsOutlined,
      name: 'menus.merge',
      show: true
    },
    children: [
      {
        path: '/main/examPaperClassList',
        meta: {
          component: ExamPaperClassListPage,
          name: 'menus.merge.ExamPaperClassListPage',
          show: true
        }
      },
      {
        path: '/main/classmate',
        meta: {
          component: ClassMate,
          name: 'menus.merge.ClassMate',
          show: false
        }
      }
    ]
  }

]

export default menus