import React from 'react';
import { AppstoreOutlined, UserOutlined, ScheduleOutlined, TableOutlined, MergeCellsOutlined } from '@ant-design/icons';

// 试题管理
const AddQuestionPage = React.lazy(() => import('../view/main/TestManagement/addQuestions'));
const QuestionTypePage = React.lazy(() => import('../view/main/TestManagement/questionsType'));
const WatchQuestionPage = React.lazy(() => import('../view/main/TestManagement/watchQuestions'));
const DetailPage = React.lazy(() => import("../view/main/TestManagement/testDetail"));
const EditQuestionPage = React.lazy(() => import("../view/main/TestManagement/editQuestion"));

// 用户管理
const AddTeacher = React.lazy(() => import('../view/main/UserManagement/addTeacher'));
const ViewTeacher = React.lazy(() => import('../view/main/UserManagement/viewTeacher'));

// 考试管理
const AddExamPage = React.lazy(() => import('../view/main/ExamManagement/addExam'));
const UserListPage = React.lazy(() => import('../view/main/ExamManagement/examList'));
const EditPage = React.lazy(() => import("../view/main/ExamManagement/edits"));
const ConditionPage = React.lazy(() => import("../view/main/ExamManagement/condition"));

// 班级管理
const GeadePage = React.lazy(() => import('../view/main/ClassManagement/grade'));
const RoomPage = React.lazy(() => import('../view/main/ClassManagement/room'));
const StudentPage = React.lazy(() => import('../view/main/ClassManagement/student'));

// 阅卷管理
const ExamPaperClassListPage = React.lazy(() => import('../view/main/MarkingManagement/examPaperClassList'));
const ClassMate = React.lazy(() => import("../view/main/MarkingManagement/classmate"));


const menus = [{
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
      component: AddQuestionPage,
      meta: {
        name: 'menus.question.addQuestion',
        show: true,
        view_id: 'main-addQuestions'
      }
    },
    {
      path: '/main/questionType',
      component: QuestionTypePage,
      meta: {
        name: 'menus.question.questionType',
        show: true,
        view_id: 'main-questionsType'
      }
    },
    {
      path: '/main/watchQuestions',
      component: WatchQuestionPage,
      meta: {
        name: 'menus.question.watchQuestions',
        show: true,
        view_id: 'main-watchQuestions'
      }
    },
    {
      path: '/main/detail',
      component: DetailPage,
      meta: {
        name: '详情',
        show: false,
        view_id: 'main-questionsDetail'
      }
    },
    {
      path: '/main/editQuestion',
      component: EditQuestionPage,
      meta: {
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
      component: AddTeacher,
      meta: {
        name: 'menus.user.AddTeacher',
        show: true,
        view_id: "main-addUser"
      }
    },
    {
      path: '/main/viewTeacher',
      component: ViewTeacher,
      meta: {
        name: 'menus.user.ViewTeacher',
        show: true,
        view_id: "main-showUser"
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
      component: AddExamPage,
      meta: {
        name: 'menus.exam.AddExamPage',
        show: true,
        view_id: "main-addExam"
      }
    },
    {
      path: '/main/userList',
      component: UserListPage,
      meta: {
        name: 'menus.exam.UserListPage',
        show: true,
        view_id: "main-examList"
      }
    },
    {
      path: '/main/edits',
      component: EditPage,
      meta: {
        name: 'menus.exam.EditPage',
        show: false,
        view_id: "main-examDetail"
      }
    },
    {
      path: '/main/condition',
      component: ConditionPage,
      meta: {
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
      component: GeadePage,
      meta: {
        name: 'menus.class.GeadePage',
        show: true,
        view_id: "main-grade"
      }
    },
    {
      path: '/main/room',
      component: RoomPage,
      meta: {
        name: 'menus.class.RoomPage',
        show: true,
        view_id: "main-room"
      }
    },
    {
      path: '/main/student',
      component: StudentPage,
      meta: {
        name: 'menus.class.StudentPage',
        show: true,
        view_id: "main-student"
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
      component: ExamPaperClassListPage,
      meta: {
        name: 'menus.merge.ExamPaperClassListPage',
        show: true,
        view_id: "main-examPaperClassList"
      }
    },
    {
      path: '/main/classmate',
      component: ClassMate,
      meta: {
        name: 'menus.merge.ClassMate',
        show: false,
        view_id: "main-examinationPapers"
      }
    }
  ]
}
]

export default menus