import ajax from '../../utils/request';

// 获取学生试卷列表接口
export const getStudent = (exam_exam_id: string, student_id: string, grade_id: string, status: number, start_time: number, end_time: number, page: number, pageSize?: number) => ajax.get('/exam/student')

// 获取学生试卷详情接口
export const getExamStudentDetail = () => ajax.get('/exam/student/t27znv-gu7azm-qpq9ai-laaf9m');

// 获取学生试卷列表接口
export const putExamStudentList = (score: number) => ajax.put('/exam/student/t27znv-gu7azm-qpq9ai-laaf9m', { score })






