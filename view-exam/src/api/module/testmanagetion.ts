import ajax from '../../utils/request';


//试题分类接口
export const testType=()=>ajax.get('/exam/insertQuestionsType')