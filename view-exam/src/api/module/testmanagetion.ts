import ajax from '../../utils/request';


//试题分类接口
export const testType=()=>ajax.get('/exam/getQuestionsType')

//获取所有课程
export const AllClass=()=>ajax.get('/exam/subject')
//获取所有考试类型
export const AllexamType=()=>ajax.get('/exam/examType')

//按条件获取试题
export const GetTest=(questions_type_id?:string,subject_id?:string,exam_id?:string)=>ajax.get('/exam/questions/condition',{params:{questions_type_id,subject_id,exam_id}})
//详情页
export const GetTests=(questions_id?:string)=>ajax.get('/exam/questions/condition',{params:{questions_id}})
//获取所有的试题
export const GetAllTest=()=>ajax.get('/exam/questions/new')