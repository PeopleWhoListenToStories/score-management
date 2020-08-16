import ajax from '../../utils/request';


//试题分类接口
export const testType=()=>ajax.get('/exam/getQuestionsType')

//获取所有课程
export const AllClass=()=>ajax.get('/exam/subject')