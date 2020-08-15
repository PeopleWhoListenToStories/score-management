import ajax from '../../utils/request';

// 测试接口
export const test = () => ajax.get('/api/test');

//试题分类接口
export const testType=()=>ajax.get('/exam/insertQuestionsType')
