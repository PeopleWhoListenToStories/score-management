import ajax from '../../utils/request';

//获取所有试题类型
export const testingTypes=()=>ajax.get('/exam/getQuestionsType')