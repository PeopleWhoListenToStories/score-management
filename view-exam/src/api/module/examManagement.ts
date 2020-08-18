import ajax from '../../utils/request';
//获取所有的试卷列表
export const AllExamList=()=>ajax.get('/exam/exam')
//获取所有试题类型
export const testingTypes=()=>ajax.get('/exam/examType')
//获取所有的课程
export const Allcourses=()=>ajax.get('/exam/subject')
//添加考试
export const CreateExam=(subject_id:string,exam_id:string,title:string,number:number,start_time:number,end_time:number)=>ajax.post('/exam/exam',{
    subject_id,exam_id,title,number,start_time,end_time
   })
// //删除考试
// export const DeleteExam=()=>ajax.delete('/exam/exam/w5tcy-g2dts')
   