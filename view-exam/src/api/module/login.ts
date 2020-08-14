import ajax from '../../utils/request';

// 测试接口
export const test = () => ajax.get('/api/test');